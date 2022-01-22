const express = require('express');
const { v4: uuidv4 } = require('uuid');
const router = express.Router();
const notes = require('express').Router();
const fs = require('fs');
const reload = require('reload');

let data = require('../db/db.json');

router.get('/', (req, res) => res.json(data));

router.post('/', (req, res) => {
    const newTitle = req.body.title;
    const newText = req.body.text;
    const note1 = req.body;
    note1.id = uuidv4();

    if (!newTitle || !newText) {
        res.status(400).json({msg: 'Need title and text input.'})
    } else {
        data.push(note1);
        fs.writeFileSync('./db/db.json', JSON.stringify(data), 'utf8');
        res.json(true);
    };
});

router.delete("/:id", (req, res) => {
    fs.readFile("db/db.json", (err, data) => {
      // Check for error
      if (err) throw err;
      let deleteId = req.params.id;
      console.log(deleteId);
      // Handle data gathering for json update
      let notes = JSON.parse(data);
      notes.forEach((item, i) => {
        if (item.id == deleteId) {
          console.log(item);
          notes.splice(i, 1);
        }
      });
  
      // Write updated json to array
      fs.writeFile("db/db.json", JSON.stringify(notes, null, 2), (err) => {
        // Check for error
        if (err) throw err;
        res.send("200");
      });
    });
  });

module.exports = router;