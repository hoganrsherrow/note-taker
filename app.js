const express = require('express');
const app = express();

// Allow access to public files
app.use(express.static('./public'));

// Parse incoming data
app.use(express.urlencoded({ extended: true }));

// parse incoming JSON data
app.use(express.json());

const port = process.env.PORT || 3001;
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
app.post('api/', (req, res) => {
    console.log(req.body);
})



// Start listening
app.listen(port, () => {
    console.log(`Example app listening on port ${port}.`);
})