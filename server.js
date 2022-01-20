const express = require('express');
const PORT = 3001;
const allNotes = require('./db/db.json');

const app = express();

// GET route to get all of the notes
app.get('/', (req, res) => res.json(allNotes));

// Listen for connections
app.listen(PORT, () =>
  console.info(`Example app listening at http://localhost:${PORT} 🚀`)
);