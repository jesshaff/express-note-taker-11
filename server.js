const express = require('express');
const fs = require('fs');
const path = require('path');
const allNotes = require('./db/db.json');

const PORT = 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// GET route to get all of the notes
app.get('/api/notes', (req, res) => {
  res.json(allNotes.slice(1))
});

// Listen for connections
app.listen(PORT, () =>
  console.info(`Example app listening at http://localhost:${PORT} 🚀`)
);

