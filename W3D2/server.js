const express = require('express');
const cors = require('cors');

const app = express();
const port = 8080;

app.use(cors())

app.get("/", (req, res) => {
    const query = req.query;
    let result = Number(query.first);
    switch (query.operator) {
        case "add":
            result += Number(query.second);
            break;
        case "sub":
            result -= Number(query.second);
            break;
        case "mul":
            result *= Number(query.second);
            break;
        case "div":
            result /= Number(query.second);
            break;
        default:
            result = null;
            break;
    }
    res.send({ result });
})

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
})