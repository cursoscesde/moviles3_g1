const express = require('express')
const app = express()
const port = 3001
const cors = require('cors')
const data = require('./data');

app.use(cors({ origin: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/get-user', (req, res) => {

    res.json(data.Data.user);
})

app.get('/get-users', (req, res) => {

    res.json(data.Data.users);
})

app.post('/add-user', (req, res) => {

    const { name, job } = req.body;
    const user = {
        "name": name,
        "job": job,
        "id": "372",
        "createdAt": new Date()
    }
    res.json(user);
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})


