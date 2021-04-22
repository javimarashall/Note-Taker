const dataBase = require("../db/db.json");

//Routing
module.exports = (app) => {
    //API GET request
    app.get("/api/notes", (req, res) => res.json(dataBase));

    //API post request
    app.post("/api/notes", (req, res) => {  //need to add an ID
        dataBase.push(req.body);        
        res.json(dataBase); //not sure if this is ok
    })

}