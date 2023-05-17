const urlParams = new URLSearchParams(window.location.search);
const answer = urlParams.get('answer');

const result = document.getElementById("result");
const goBackBtn = document.getElementById("go-back-btn");

console.log(answer)

result.innerHTML = answer;

goBackBtn.addEventListener('click', () => {
    window.location.href = "./index.html"
});