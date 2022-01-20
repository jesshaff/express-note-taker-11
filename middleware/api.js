const express = require('express');
const uuid = require('uuid');
const router = express.Router();

let allNotes = require('../db/db.json');

router.get('/', (req, res) => res.json(data));

router.post('/', (req, res) => {
    const newTitle = req.body.title;
    const newText = req.body.text;
    if (!newTitle || !newText) {
        res.status(400).json({msg: 'Need title and text input.'})
    } else {
        const newJSON = {
            id: uuid.v4(),
            title: newTitle,
            text: newText
        };
        data.push(newJSON);
        res.json(data);
    };
});


module.exports = router;