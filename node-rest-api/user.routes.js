const path = require('path');
const express = require('express');
const app = express();
const cors = require('cors');
const port = 8000;
const fs = require('fs');
const bodyParser = require('body-parser');
const userRoutes = path.join(__dirname, '../src/assets/data/customer_data.json');

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

fs.readFile(userRoutes, (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    let users = JSON.parse(data);
});

app.listen(port, () => console.log(`Running on port ${port}`));

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users.find(user => user.id === id);
    res.json(user);
});

app.post('/users', (req, res) => {
    const user = req.body;
    users.push(user);
    res.json(user);
});

app.put('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = req.body;
    const index = users.findIndex(user => user.id === id);
    users[index] = user;
    res.json(user);
});

app.post('/login', (req, res) => {
    const user = req.body;
    const index = users.findIndex(user => user.email === user.email && user.password === user.password);
    if (index !== -1) {
        res.json(users[index]);
    } else {
        res.sendStatus(401);
    }
});

app.post('/register', (req, res) => {
    const user = req.body;
    const index = users.findIndex(user => user.email === user.email);
    if (index !== -1) {
        res.sendStatus(401);
    } else {
        users.push(user);
        res.json(user);
    }
});