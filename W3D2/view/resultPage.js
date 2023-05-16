const urlParams = new URLSearchParams(window.location.search);
const answer = urlParams.get('answer');

const result = document.getElementById("result");

console.log(answer)

result.innerHTML = answer;