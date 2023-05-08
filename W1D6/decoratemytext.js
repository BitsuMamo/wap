const biggerDecorationBtn = document.getElementById("bigger-decoration")
const textArea = document.getElementById("large-text")
const blingCheckBox = document.getElementById("bling")
const pigLatinBtn = document.getElementById("pig-latin")
const malkovichBtn = document.getElementById("malkovich")

textArea.style.fontSize = "12pt";

const fontIncrease = () => {
    let fontSize = textArea.style.fontSize;

    fontSize = fontSize.substring(0, fontSize.length - 2);

    fontSize = Number(fontSize);

    fontSize += 2;

    textArea.style.fontSize = `${fontSize}pt`;

};


biggerDecorationBtn.addEventListener("click", () => {
    setInterval(fontIncrease, 500)
})

let toggle = false;

blingCheckBox.addEventListener("change", () => {
    toggle = !toggle;
    if (toggle) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "green";
        textArea.style.textDecoration = "underline";
        document.body.style.backgroundColor = "gray";
    } else {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
        document.body.style.backgroundColor = "white";
    }


})

malkovichBtn.addEventListener("click", () => {

    let text = textArea.value;
    let textArray = text.split(' ');

    let newText = "";

    textArray.forEach(word => {
        if (word.length >= 5) {
            word = "Malkovich";
        }

        newText += word + " ";

    });

    textArea.value = "";
    textArea.value = newText;
})

pigLatinBtn.addEventListener("click", () => {
    let text = textArea.value;
    let textArray = text.split(' ');

    let newText = "";

    textArray.forEach(word => {
        let newWord = "";
        if (isVowel(word.substring(0, 1))) {
            newWord = word + "ay";
        } else {
            newWord = word.substring(1, word.length) + word.substring(0, 1) + "ay";
        }

        newText += newWord + " ";
    });

    textArea.value = "";
    textArea.value = newText;


})

function isVowel(letter) {
    switch (letter) {
        case 'A':
        case 'a':
        case 'E':
        case 'e':
        case 'I':
        case 'i':
        case 'O':
        case 'o':
        case 'U':
        case 'u':
            return true;
        default:
            return false
    }
}