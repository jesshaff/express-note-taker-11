// Dependencies 
const express = require('express');
const path = require('path');

// PORT - to start server
const PORT = 3001;

// Load express.js
const app = express();

// Mount middleware for json
app.use(express.json());

// Mount middleware for static files
app.use(express.static(path.join(__dirname, 'public')));

// Mount middleware for api router
app.use('/api/notes', require('./middleware/api'));

// Mount middleware for html router
app.use('/', require('./middleware/html'));

app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/notes.html"))
);

// Listen for connections
app.listen(PORT, () =>
  console.info(`Server listening at http://localhost:${PORT} 🚀`)
);