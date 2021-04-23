const express = require('express')
const dataBase = require("../db/db.json");
const fs = require('fs');
const util = require("util");
const { v4: uuidv4 } = require("uuid");

const promisifydRead = util.promisify(fs.readFile);
const promisifydWrite = util.promisify(fs.writeFile);

//Routing
module.exports = (app) => {
    //API GET request
    app.get("/api/notes", (req, res) => {
        promisifydRead("./db/db.json", "utf8").then((notes) => {
            res.json(JSON.parse(notes));
        });
    });

    //API post request
    app.post("/api/notes", (req, res) => { //need to add an ID
        const newNote = req.body;
        newNote.id = uuidv4();
        promisifydRead("./db/db.json", "utf8").then((notes) => {
            const allNotes = JSON.parse(notes);
            allNotes.push(newNote);
            promisifydWrite("./db/db.json", JSON.stringify(allNotes));
            res.json(newNote);
        });
    })

    app.delete("/api/notes/:id", (req,res) => {
        promisifydRead("./db/db.json", "utf8").then((notes) => {
            const allNotes = JSON.parse(notes);
            //remove a note with matching id from the notes list
            const filterArray = allNotes.filter((note) => req.params.id !== note.id           
            )
            promisifydWrite("./db/db.json", JSON.stringify(filterArray));
            res.json({id: req.params.id});
        });
    });

}