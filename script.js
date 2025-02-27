const questions = [
    { question: "What comes next? A, C, E, G, ?", answer: "I" },
    { question: "Find the place value of 'M'.", answer: "13" },
    { question: "Reverse 5291.", answer: "1925" },
    { question: "What comes next? B, D, F, H, ?", answer: "J" },
    { question: "Find the place value of 'Z'.", answer: "26" },
    { question: "Reverse 8734.", answer: "4378" }
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
