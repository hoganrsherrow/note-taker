const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const animals = require('./db/db.json');

app.get('/', (req, res) => {
    res.json(animals);
})

app.get('/api/db', (req, res) => {
    res.send("Trying to access the db, eh?");
})

app.listen(port, () => {
    console.log(`Example app listeing on port ${port}.`);
})