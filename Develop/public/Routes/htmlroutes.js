//Path for the correct HTML 
const path = require("path");

//Routing HTML
module.exports = (app) => {
//Route for index    
    app.get("/home", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/index.html"));
});
//Route for notes
    app.get("/notes", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
});
//No matching route
    app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
}
