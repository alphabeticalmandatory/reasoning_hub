// Function to get the inverse letter
function inverseLetter(letter) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const index = alphabet.indexOf(letter);
    if (index === -1) return "";  // If not found, return empty
    return alphabet[25 - index];  // Mirror position
}

// Quiz Questions
const questions = [
    { question: "Inverse of 'M'", answer: inverseLetter("M") }, // N
    { question: "Inverse of 'A'", answer: inverseLetter("A") }, // Z
    { question: "Inverse of 'B'", answer: inverseLetter("B") }, // Y
    { question: "Inverse of 'X'", answer: inverseLetter("X") }, // C
    { question: "Inverse of 'D'", answer: inverseLetter("D") }, // W
    { question: "Reverse 5291", answer: "1925" }, // Keeping a number question too
];

let score = 0;
let currentQuestion = 0;

function loadQuestion() {
    if (currentQuestion < questions.length) {
        document.getElementById("question").textContent = questions[currentQuestion].question;
    } else {
        document.getElementById("question").textContent = "Quiz Over!";
        document.getElementById("answer").style.display = "none";
        document.querySelector("button").style.display = "none";
    }
}

function checkAnswer() {
    let userAnswer = document.getElementById("answer").value.trim().toUpperCase();
    let correctAnswer = questions[currentQuestion].answer.toUpperCase();

    if (userAnswer === correctAnswer) {
        document.getElementById("feedback").textContent = "Correct!";
        document.getElementById("feedback").className = "correct";
        score += 10;
    } else {
        document.getElementById("feedback").textContent = `Wrong! Correct answer: ${correctAnswer}`;
        document.getElementById("feedback").className = "wrong";
    }

    document.getElementById("score").textContent = score;
    document.getElementById("answer").value = "";
    currentQuestion++;

    let progress = (currentQuestion / questions.length) * 100;
    document.getElementById("progress").style.width = progress + "%";

    setTimeout(loadQuestion, 1000);
}

window.onload = loadQuestion;
