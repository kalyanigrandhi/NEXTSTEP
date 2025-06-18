const quizData = [
    { question: "What type of tasks do you enjoy?", options: ["Solving problems", "Managing teams", "Creating art", "Helping people"], category: ["Tech", "Business", "Arts", "Medicine"] },
    { question: "Which school subject do you like the most?", options: ["Math", "Economics", "Design", "Biology"], category: ["Tech", "Business", "Arts", "Medicine"] },
    { question: "How do you prefer working?", options: ["Alone", "With a team", "With creative freedom", "In a structured environment"], category: ["Tech", "Business", "Arts", "Medicine"] },
    { question: "Which skill do you value the most?", options: ["Logical thinking", "Leadership", "Creativity", "Empathy"], category: ["Tech", "Business", "Arts", "Medicine"] },
    { question: "What kind of work environment do you prefer?", options: ["Office-based", "Flexible & remote", "Studio or workshop", "Hospital or clinic"], category: ["Tech", "Business", "Arts", "Medicine"] },
    { question: "What inspires you the most?", options: ["Innovation & technology", "Successful entrepreneurs", "Artistic expression", "Helping others"], category: ["Tech", "Business", "Arts", "Medicine"] },
    { question: "Which industry interests you?", options: ["Software & AI", "Finance & management", "Entertainment & design", "Healthcare & wellness"], category: ["Tech", "Business", "Arts", "Medicine"] },
    { question: "What do you do in your free time?", options: ["Coding & gaming", "Reading business books", "Drawing & photography", "Volunteering & helping"], category: ["Tech", "Business", "Arts", "Medicine"] },
    { question: "What do you look for in a career?", options: ["High salary & demand", "Business opportunities", "Creative freedom", "Helping others"], category: ["Tech", "Business", "Arts", "Medicine"] },
    { question: "How do you handle challenges?", options: ["Analyze & solve", "Strategize & delegate", "Think outside the box", "Stay calm & support"], category: ["Tech", "Business", "Arts", "Medicine"] }
];

let currentQuestion = 0;
let answers = { Tech: 0, Business: 0, Arts: 0, Medicine: 0 };

const quiz = document.getElementById("quiz");
const nextBtn = document.getElementById("next-btn");
const submitBtn = document.getElementById("submit-btn");
const progress = document.querySelector(".progress");
const resultSection = document.getElementById("result-section");
const careerResult = document.getElementById("career-result");

function loadQuestion() {
    const q = quizData[currentQuestion];
    quiz.innerHTML = `<p class="question">${q.question}</p>`;
    q.options.forEach((option, index) => {
        quiz.innerHTML += `<button class="option" onclick="selectAnswer('${q.category[index]}')">${option}</button>`;
    });
}

function selectAnswer(category) {
    answers[category]++;
    currentQuestion++;
    progress.style.width = `${(currentQuestion / quizData.length) * 100}%`;

    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        quiz.style.display = "none";
        nextBtn.style.display = "none";
        submitBtn.style.display = "block";
    }
}

submitBtn.onclick = function () {
    resultSection.classList.remove("hidden");
    const bestCareer = Object.keys(answers).reduce((a, b) => answers[a] > answers[b] ? a : b);
    
    const careerPaths = {
        Tech: "Software Engineer, Data Scientist, AI Specialist",
        Business: "Entrepreneur, Marketing Manager, Financial Analyst",
        Arts: "Graphic Designer, Filmmaker, Architect",
        Medicine: "Doctor, Nurse, Psychologist"
    };

    careerResult.innerText = `Your ideal career path is: ${careerPaths[bestCareer]}`;
};

loadQuestion();
