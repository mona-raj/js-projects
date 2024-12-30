let questions = [
    {
        question : "What is the powerhouse of the cell?",
        answers : [
            {
                text: "Nucleus",
                correct : false
            },
            {
                text: "Ribosome",
                correct : false
            },
            {
                text: "Mitochondria",
                correct : true
            },
            {
                text: "Golgi Apparatus",
                correct : false
            }
        ]
    },
    {
        question : "Which of these is a prime number?",
        answers : [
            {
                text : "8",
                correct : false
            },
            {
                text : "12",
                correct : false
            },
            {
                text : "19",
                correct : true
            },
            {
                text : "21",
                correct : false
            }
        ]
    },
    {
        question : "What does URL stand for?",
        answers : [
            {
                text : "Uniform Resource Link",
                correct : false
            },
            {
                text : "Uniform Retrieval Locator",
                correct : false
            },
            {
                text : "Uniform Resource Locator",
                correct : true
            },
            {
                text : "Universal Retrieval Link",
                correct : false
            }
        ]
    },
    {
        question : "What is the term for the process by which plants make their own food using sunlight?",
        answers : [
            {
                text : "Photosynthesis",
                correct : true
            },
            {
                text : "Respiration",
                correct : false
            },
            {
                text : "Transpiration",
                correct : false
            },
            {
                text : "Fermentation",
                correct : false
            }
        ]
    },
    {
        question : "In binary code, what does '1' and '0' represent?",
        answers : [
            {
                text : "On and Off",
                correct : false
            },
            {
                text : "True and False",
                correct : false
            },
            {
                text : "High and Low voltage",
                correct : false
            },
            {
                text : "All of the above",
                correct : true
            }
        ]
    }
];

let questionElement = document.getElementById("question");
let answerButton = document.getElementById("answer-buttons");
let nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
 }

 function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    // display answers
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.classList.add("btn");
        button.innerHTML = answer.text;
        answerButton.appendChild(button);

        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }

        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while(answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild);
    }
}

// answer button click event function
function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    // display color and increase score
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }

    // display correct answer and disable buttons
    Array.from(answerButton.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        } 
        button.disabled = true;
    });

    // display next button
    nextButton.style.display = "block"
}

nextButton.addEventListener("click", ()=> {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}
 
function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length} !`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}


startQuiz();