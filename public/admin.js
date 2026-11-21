let currentRoomId = null;
let pollInterval = null;

window.addEventListener('DOMContentLoaded', () => {
    const savedRoom = localStorage.getItem('admin_current_room');
    if (savedRoom) {
        currentRoomId = savedRoom;
        $('displayRoomCode').textContent = currentRoomId;
        $('setupSection').classList.add('hidden');
        $('activeRoomSection').classList.remove('hidden');
        pollInterval = setInterval(fetchRoomData, 2000);
    }
});

$('btnCreateRoom').addEventListener('click', async () => {
    const name = $('adminRoomName').value;
    const qtd = $('adminQtd').value;
    const code = $('adminRoomCodeInput').value;

    const res = await fetch('/api/admin/rooms', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ roomName: name, questionCount: qtd, roomCode: code })
    });
    const data = await res.json();
    
    currentRoomId = data.room.id;
    localStorage.setItem('admin_current_room', currentRoomId);
    if ($('roomCode')) $('roomCode').value = currentRoomId;
    
    $('displayRoomCode').textContent = currentRoomId;
    $('setupSection').classList.add('hidden');
    $('activeRoomSection').classList.remove('hidden');
    
    $('btnStartQuiz').style.display = 'block';
    $('btnEndRoom').classList.remove('hidden');
    $('btnNewRoom').classList.add('hidden');
    $('statusText').innerHTML = 'Alunos na sala: <span id="waitingCount">0</span>';
    
    pollInterval = setInterval(fetchRoomData, 2000);
});

async function fetchRoomData() {
    if (!currentRoomId) return;
    
    const res = await fetch(`/api/admin/rooms/${currentRoomId}/details`);
    
    if (res.status === 404) {
        clearInterval(pollInterval);
        localStorage.removeItem('admin_current_room');
        alert("Esta sala não existe mais.");
        location.reload();
        return;
    }

    const data = await res.json();
    const { room, results } = data;
    
    const waitingSpan = $('waitingCount');
    if(waitingSpan) waitingSpan.textContent = room.studentsJoined.length;
    
    if (room.status === 'STARTED' && $('btnStartQuiz').style.display !== 'none') {
        $('btnStartQuiz').style.display = 'none';
        $('statusText').innerHTML = `Prova em andamento! Alunos: <span id="waitingCount">${room.studentsJoined.length}</span>`;
    } else if (room.status === 'FINISHED') {
        $('btnStartQuiz').style.display = 'none';
        $('btnEndRoom').classList.add('hidden');
        $('btnNewRoom').classList.remove('hidden');
        $('statusText').innerHTML = `Sala Encerrada! Resultados de <span id="waitingCount">${room.studentsJoined.length}</span> alunos:`;
    }

    const tbody = $('resultsTableBody');
    tbody.innerHTML = '';
    
    room.studentsJoined.forEach(studentName => {
        const studentResult = results.find(r => r.studentName === studentName);
        const progress = room.studentsProgress[studentName] || { answered: 0 };
        
        const tr = document.createElement('tr');
        
        if (studentResult) {
            tr.innerHTML = `
                <td><strong>${studentName}</strong></td>
                <td><span style="background:#dcfce7; color:#166534; padding:6px 10px; border-radius:6px; font-weight:700; font-size:12px;">✅ Finalizou</span></td>
                <td style="font-weight:600;">${studentResult.correctCount} / ${studentResult.totalQuestions}</td>
                <td style="font-weight:900; color: #0f172a; font-size:16px;">${studentResult.score}%</td>
            `;
        } else {
            let statusBadge = '';
            if (room.status === 'WAITING') {
                statusBadge = `<span style="background:#fef3c7; color:#92400e; padding:6px 10px; border-radius:6px; font-weight:700; font-size:12px;">⏳ Aguardando</span>`;
            } else if (room.status === 'STARTED') {
                statusBadge = `<span style="background:#dbeafe; color:#1e40af; padding:6px 10px; border-radius:6px; font-weight:700; font-size:12px;">✍️ Respondendo (${progress.answered}/${room.questionCount})</span>`;
            } else {
                statusBadge = `<span style="background:#fee2e2; color:#991b1b; padding:6px 10px; border-radius:6px; font-weight:700; font-size:12px;">❌ Fechada (Calculando...)</span>`;
            }
            
            tr.innerHTML = `
                <td>${studentName}</td>
                <td>${statusBadge}</td>
                <td style="color:#94a3b8;">-</td>
                <td style="color:#94a3b8;">-</td>
            `;
        }
        tbody.appendChild(tr);
    });
}

$('btnStartQuiz').addEventListener('click', async () => {
    await fetch(`/api/admin/rooms/${currentRoomId}/start`, { method: 'POST' });
    $('btnStartQuiz').style.display = 'none';
});

$('btnEndRoom').addEventListener('click', async () => {
    const confirmar = confirm("Encerrar a sala fechará a prova e enviará os resultados de todos os alunos imediatamente. Deseja continuar?");
    if (!confirmar) return;

    try {
        await fetch(`/api/admin/rooms/${currentRoomId}/end`, { method: 'POST' });
    } catch (e) {
        console.error("Erro ao encerrar a sala", e);
    }
});

$('btnNewRoom').addEventListener('click', () => {
    clearInterval(pollInterval);
    localStorage.removeItem('admin_current_room');
    currentRoomId = null;

    $('activeRoomSection').classList.add('hidden');
    $('setupSection').classList.remove('hidden');
    $('resultsTableBody').innerHTML = '';
    
    $('btnStartQuiz').style.display = 'block';
    $('btnEndRoom').classList.remove('hidden');
    $('btnNewRoom').classList.add('hidden');
    $('statusText').innerHTML = 'Alunos na sala: <span id="waitingCount">0</span>';
    
    $('adminRoomName').value = '';
});