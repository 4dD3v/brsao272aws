const $ = id => document.getElementById(id);

const state = {
    questions: [], current: 0, answers: {},
    studentName: '', roomCode: '', pollInterval: null,
    quizStarted: false, finished: false, isSubmitting: false
};

function showScreen(name) {
    document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
    $(name).classList.remove('hidden');
}

function saveStudentState() {
    if (state.finished) return;
    localStorage.setItem('aws_quiz_student_state', JSON.stringify({
        studentName: state.studentName,
        roomCode: state.roomCode,
        answers: state.answers,
        current: state.current
    }));
}

window.addEventListener('DOMContentLoaded', async () => {
    const saved = localStorage.getItem('aws_quiz_student_state');
    if (saved) {
        const parsed = JSON.parse(saved);
        state.studentName = parsed.studentName;
        state.roomCode = parsed.roomCode;
        state.answers = parsed.answers || {};
        state.current = parsed.current || 0;

        $('btnJoinRoom').textContent = "Restaurando Prova...";
        
        try {
            const res = await fetch(`/api/rooms/${state.roomCode}/join`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({ studentName: state.studentName })
            });
            const data = await res.json();
            
            if (data.error || data.status === 'FINISHED') {
                localStorage.removeItem('aws_quiz_student_state');
                $('btnJoinRoom').textContent = "Entrar na Sala";
                return; 
            }

            if (data.status === 'STARTED') {
                state.quizStarted = true;
                await loadQuestions();
            } else {
                showScreen('screenWaiting');
                state.pollInterval = setInterval(checkRoomStatus, 2000);
            }
        } catch(e) {
            $('btnJoinRoom').textContent = "Entrar na Sala";
        }
    }
});

$('btnJoinRoom').addEventListener('click', async () => {
    state.studentName = $('studentName').value.trim();
    state.roomCode = $('roomCode').value.trim().toUpperCase();

    if (!state.studentName || !state.roomCode) return alert('Preencha nome e sala.');

    $('btnJoinRoom').textContent = "Conectando...";

    try {
        const res = await fetch(`/api/rooms/${state.roomCode}/join`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ studentName: state.studentName })
        });
        const data = await res.json();
        if (data.error) throw new Error(data.error);

        saveStudentState();
        showScreen('screenWaiting');
        state.pollInterval = setInterval(checkRoomStatus, 2000);
    } catch (err) {
        alert(err.message);
        $('btnJoinRoom').textContent = "Entrar na Sala";
    }
});

async function checkRoomStatus() {
    try {
        const res = await fetch(`/api/rooms/${state.roomCode}/status`);
        const data = await res.json();
        
        if (data.status === 'STARTED' && !state.quizStarted) {
            state.quizStarted = true;
            loadQuestions();
        } 
        else if (data.status === 'FINISHED' && !state.finished) {
            clearInterval(state.pollInterval);
            await finishQuiz();
        }
    } catch(e) { console.error(e); }
}

async function loadQuestions() {
    const res = await fetch(`/api/rooms/${state.roomCode}/questions`);
    const data = await res.json();
    state.questions = data.questions;
    renderQuestion();
    showScreen('screenQuiz');
}

async function updateProgress() {
    saveStudentState();

    const answeredCount = Object.values(state.answers).filter(ans => {
        if (Array.isArray(ans)) return ans.length > 0;
        return ans !== undefined && ans !== '';
    }).length;

    try {
        await fetch(`/api/rooms/${state.roomCode}/progress`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ studentName: state.studentName, answeredCount })
        });
    } catch(e) {}
}

function renderQuestion() {
    const q = state.questions[state.current];
    const isMultiple = q.multiple === true;
    
    $('quizProgressLabel').textContent = `Questão ${state.current + 1} de ${state.questions.length}` + (isMultiple ? " (MÚLTIPLA ESCOLHA)" : "");
    $('questionText').textContent = q.question;
    
    const list = $('optionsList');
    list.innerHTML = '';
    const colors = ['color-0', 'color-1', 'color-2', 'color-3'];

    if (isMultiple && !Array.isArray(state.answers[state.current])) {
        state.answers[state.current] = [];
    }

    q.options.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.className = `kahoot-btn ${colors[index % colors.length]}`; 
        
        if (isMultiple && state.answers[state.current].includes(opt.letter)) btn.classList.add('selected');
        else if (!isMultiple && state.answers[state.current] === opt.letter) btn.classList.add('selected');

        btn.textContent = opt.text;
        
        btn.addEventListener('click', () => {
            if (isMultiple) {
                const ansArr = state.answers[state.current];
                const pos = ansArr.indexOf(opt.letter);
                if (pos === -1) {
                    ansArr.push(opt.letter);
                    btn.classList.add('selected');
                } else {
                    ansArr.splice(pos, 1);
                    btn.classList.remove('selected');
                }
                if (ansArr.length > 0) $('btnNext').classList.remove('hidden');
                else $('btnNext').classList.add('hidden');
                
            } else {
                state.answers[state.current] = opt.letter;
                document.querySelectorAll('.kahoot-btn').forEach(b => b.classList.remove('selected'));
                btn.classList.add('selected');
                $('btnNext').classList.remove('hidden');
            }
            updateProgress();
        });
        list.appendChild(btn);
    });

    const hasAnswer = isMultiple ? state.answers[state.current].length > 0 : !!state.answers[state.current];
    if (hasAnswer) $('btnNext').classList.remove('hidden');
    else $('btnNext').classList.add('hidden');

    if(state.current === state.questions.length - 1) $('btnNext').textContent = "Finalizar e Enviar";
    else $('btnNext').textContent = "Próxima";
}

$('btnNext').addEventListener('click', async () => {
    saveStudentState(); // Salva estado ao mudar de página
    if (state.current === state.questions.length - 1) await finishQuiz();
    else { state.current++; renderQuestion(); window.scrollTo({ top: 0, behavior: 'smooth' }); }
});

async function finishQuiz() {
    if (state.isSubmitting) return;
    state.isSubmitting = true;
    
    $('btnNext').textContent = "Enviando...";
    clearInterval(state.pollInterval); 
    
    const submission = {};
    state.questions.forEach((q, i) => { submission[i] = { questionNumber: q.number, answer: state.answers[i] || '' }; });

    try {
        const res = await fetch(`/api/rooms/${state.roomCode}/submit`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ studentName: state.studentName, answers: submission })
        });
        const data = await res.json();
        
        state.finished = true;
        localStorage.removeItem('aws_quiz_student_state');
        
        $('scorePercent').textContent = data.result.score + '%';
        $('rsCorrect').textContent = data.result.correctCount;
        showScreen('screenResult');
    } catch(e) {
        state.isSubmitting = false; 
        $('btnNext').textContent = "Erro. Tentar Novamente";
    }
}

$('navStudentBtn').addEventListener('click', () => {
    if (state.finished) showScreen('screenResult');
    else if (state.quizStarted) showScreen('screenQuiz');
    else if (state.pollInterval) showScreen('screenWaiting');
    else showScreen('screenHome');
});

$('navAdminBtn').addEventListener('click', () => {
    showScreen('screenAdmin');
});
