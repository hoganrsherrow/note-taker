const express = require('express');
const app = express();

// Allow access to public files
app.use(express.static('./public'));

// Parse incoming data
app.use(express.urlencoded({ extended: true }));

// parse incoming JSON data
app.use(express.json());

const PORT = process.env.PORT || 3001;
const notes = require('./db/db.json');

// Sends index.html when url is entered
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Sends to notes page
app.get('/notes', (req, res) => {
    res.sendFile(__dirname + '/public/notes.html');
});

// This routes the fetch API request from index.js to db/db.json
app.get('/api/notes', (req, res) => {
    res.json(notes);
});

// Routes POST request
app.post('/api/notes', (req, res) => {
    console.log(req.body);
    notes.push(req.body);
    res.json(notes);
})



// Start listening
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}.`);
});