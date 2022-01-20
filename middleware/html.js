const fs = require('fs');
const path = require('path');

const express = require('express');
const router = express.Router();

const getPath = (name) => path.join(__dirname, '..', 'public', `${name}.html`);

router.get('./notes', (req, res) => {
    res.sendFile(getPath("index"));
});

module.exports = router;