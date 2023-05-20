const express = require('express');
const cors = require('cors');

const questions = [
    "1, 1, 2, 3, 5",
    "1, 4, 9, 16, 25",
    "2, 3, 5, 7, 11",
    "1, 2, 4, 8, 16"
]

const answers = [
    9, 8, 36, 32
]

const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {

    res.send('hello');
});

app.get("/lengthOfQuiz", (req, res) => {
    res.json({
        "length": questions.length
    });
});

app.get("/getQuestion/:id", (req, res) => {
    const id = req.params.id;

    if(id < 0 || id >= questions.length){
        res.json({
            status: 500,
            message: "CAN'T FIND ID",
        })
        return;
    }

    res.json({
        status: 200,
        message: questions[id]
    })
})

app.get("/getAnswer/:id", (req, res) => {
    const id = req.params.id;

    if(id < 0 || id >= questions.length){
        res.json({
            status: 500,
            message: "CAN'T FIND ID",
        })
        return;
    }

    res.json({
        status: 200,
        message: answers[id]
    })
})

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
})