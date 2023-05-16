const firstNumberInput = document.getElementById("first-number");
const secondNumberInput = document.getElementById("second-number");
const operatorsSelect = document.getElementById("operators");
const calculateBtn = document.getElementById("calculate");


const baseURL = "http://localhost:8080";

calculateBtn.addEventListener('click', async () => {
    let first = Number(firstNumberInput.value);
    let second = Number(secondNumberInput.value)
    let operator = operatorsSelect.value;

    
    const URL = `${baseURL}?first=${first}&operator=${operator}&second=${second}`
    console.log(URL);


    const res = await fetch(URL);

    if(!res.ok){
        console.log("Error");
    }

    const data = await res.json();

    window.location.href = `./resultPage.html?answer=${data.result}`;


});

