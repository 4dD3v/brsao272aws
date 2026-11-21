const express = require('express');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const QUESTIONS = require('./questions');

const app = express();
app.use(express.json());
app.use(express.static('public'));

const db = { rooms: {}, results: [] };

app.post('/api/admin/rooms', (req, res) => {
    const { roomName, questionCount } = req.body;
    const roomId = (req.body.roomCode ? req.body.roomCode.trim().toUpperCase() : 'AWS123'); 
    
    db.rooms[roomId] = {
        id: roomId,
        name: roomName || 'Turma AWS',
        questionCount: parseInt(questionCount) || 30,
        status: 'WAITING', 
        studentsJoined: [],
        studentsProgress: {}, 
        createdAt: new Date()
    };
    
    res.json({ success: true, room: db.rooms[roomId] });
});

app.post('/api/admin/rooms/:roomId/start', (req, res) => {
    const roomId = req.params.roomId.toUpperCase();
    if(db.rooms[roomId]) {
        db.rooms[roomId].status = 'STARTED';
        res.json({ success: true });
    } else {
        res.status(404).json({ error: 'Sala não encontrada' });
    }
});

app.post('/api/admin/rooms/:roomId/end', (req, res) => {
    const roomId = req.params.roomId.toUpperCase();
    if(db.rooms[roomId]) {
        db.rooms[roomId].status = 'FINISHED';
        res.json({ success: true });
    } else {
        res.status(404).json({ error: 'Sala não encontrada' });
    }
});

app.get('/api/admin/rooms/:roomId/details', (req, res) => {
    const roomId = req.params.roomId.toUpperCase();
    const room = db.rooms[roomId];
    if(!room) return res.status(404).json({ error: 'Sala não encontrada' });
    
    const roomResults = db.results.filter(r => r.roomId === roomId);
    res.json({ room, results: roomResults });
});

app.post('/api/rooms/:roomId/join', (req, res) => {
    const roomId = req.params.roomId.toUpperCase();
    const { studentName } = req.body;
    const room = db.rooms[roomId];

    if (!room) return res.status(404).json({ error: 'Sala não encontrada.' });

    const isReconnecting = room.studentsJoined.includes(studentName);

    if (room.status !== 'WAITING' && !isReconnecting) {
        return res.status(400).json({ error: 'A prova já começou ou foi encerrada. Novos alunos não podem entrar.' });
    }

    if (!isReconnecting) {
        room.studentsJoined.push(studentName);
        room.studentsProgress[studentName] = { answered: 0 }; 
    }
    
    res.json({ success: true, status: room.status, isReconnecting });
});

app.post('/api/rooms/:roomId/progress', (req, res) => {
    const roomId = req.params.roomId.toUpperCase();
    const { studentName, answeredCount } = req.body;
    const room = db.rooms[roomId];

    if (room && room.studentsProgress && room.studentsProgress[studentName]) {
        room.studentsProgress[studentName].answered = answeredCount;
    }
    res.json({ success: true });
});

app.get('/api/rooms/:roomId/status', (req, res) => {
    const roomId = req.params.roomId.toUpperCase();
    const room = db.rooms[roomId];
    if (!room) return res.status(404).json({ error: 'Sala não encontrada.' });
    res.json({ status: room.status });
});

app.get('/api/rooms/:roomId/questions', (req, res) => {
    const roomId = req.params.roomId.toUpperCase();
    const room = db.rooms[roomId];

    if (!room || room.status !== 'STARTED') {
        return res.status(400).json({ error: 'A prova ainda não começou.' });
    }

    const shuffled = [...QUESTIONS].sort(() => 0.5 - Math.random());
    const selectedQuestions = shuffled.slice(0, room.questionCount);
    
    const secureQuestions = selectedQuestions.map(q => {
        const { correct, ...qSecure } = q;
        return qSecure;
    });

    res.json({ roomName: room.name, questions: secureQuestions });
});

app.post('/api/rooms/:roomId/submit', (req, res) => {
    const { studentName, answers } = req.body;
    const roomId = req.params.roomId.toUpperCase();

    let correctCount = 0;
    
    Object.keys(answers).forEach(qIndex => {
        const studentAnswer = answers[qIndex].answer;
        const questionNumber = answers[qIndex].questionNumber;
        const realQuestion = QUESTIONS.find(q => q.number === questionNumber);
        
        if (realQuestion && !realQuestion.multiple) {
            if (realQuestion.correct === studentAnswer) correctCount++;
        } else if (realQuestion && realQuestion.multiple) {
            const correctLetters = Array.isArray(realQuestion.correct) ? realQuestion.correct : [realQuestion.correct];
            const selectedLetters = Array.isArray(studentAnswer) ? studentAnswer : [];
            const allCorrect = correctLetters.length === selectedLetters.length && correctLetters.every(l => selectedLetters.includes(l));
            if (allCorrect) correctCount++;
        }
    });

    const totalQuestions = Object.keys(answers).length;
    const score = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;

    const resultRecord = { id: uuidv4(), roomId, studentName, score, correctCount, totalQuestions, timestamp: new Date() };
    db.results.push(resultRecord);
    res.json({ success: true, result: resultRecord });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));