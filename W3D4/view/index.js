

const scoreLable = document.getElementById("score");
const submitBtn = document.getElementById("submit-btn");
const answerInput = document.getElementById("answer-input");
const sequence = document.getElementById("sequence");
const removable = document.getElementById("removable");
const endSentence = document.getElementById("end-sentence");


async function initializeSession() {
    sessionStorage.count = 0;
    sessionStorage.score = 0;

    const totalCountFetch = await fetch(`http://localhost:8080/lengthOfQuiz`);
    const totalCount = await totalCountFetch.json();
    sessionStorage.totalCount = totalCount.length;
}
async function fetchQuiz(count){
    const quizFetch = await fetch(`http://localhost:8080/getQuestion/${count}`);
    if (!quizFetch.ok) {
        console.log(quizFetch);
        alert("Refresh Website")
    }

    const quiz = await quizFetch.json();
    return quiz.message;
}


function refreshScreen(data) {
    sequence.innerHTML = "";
    sequence.innerHTML = data;
    console.log(scoreLable)
    scoreLable.innerHTML = "";
    scoreLable.innerHTML = sessionStorage.score;
}

async function initializeScreen() {
    const count = sessionStorage.count;

    const quiz = await fetchQuiz(count);
    refreshScreen(quiz)

    console.log(quiz);
}




submitBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    const count = sessionStorage.count;

    if (answerInput.value == "") {
        alert("Input Answer");
        return;
    }

    const answer = Number(answerInput.value);

    const answerFromDBFetch = await fetch(`http://localhost:8080/getAnswer/${count}`)

    if (!answerFromDBFetch.ok) {
        console.log(quizFetch);
        alert("Refresh Website")
    }

    const answerFromDB = await answerFromDBFetch.json()
    if (answerFromDB.message == answer) {
        sessionStorage.score = Number(sessionStorage.score) + 1;
    }

    nextQuestion();
})

async function nextQuestion() {
    let count = sessionStorage.count;

    count++;
    if (count == sessionStorage.totalCount) {
        endQuiz();
        return;
    }

    sessionStorage.count = count;
    const quiz = await fetchQuiz(count);

    refreshScreen(quiz)
}

function endQuiz() {
    refreshScreen();
    removable.style.display = "none";
    endSentence.innerHTML = `You have completed the Number Quiz, with a score of ${sessionStorage.score} out of 4.`
    endSentence.style.display = "inline-block";
}

initializeSession();
initializeScreen();