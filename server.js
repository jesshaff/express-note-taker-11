// Dependencies 
const express = require('express');
const path = require('path');

// Port
const PORT = 3001;

// Load express.js
const app = express();

// Listen for connections
app.listen(PORT, () =>
  console.info(`Example app listening at http://localhost:${PORT} 🚀`)
);

