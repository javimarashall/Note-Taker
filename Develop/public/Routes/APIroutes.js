const dataBase = require("../db/db.json");

//Routing
module.exports = (app) => {
    app.get("/api/notes", (req, res) => res.json(dataBase));
}