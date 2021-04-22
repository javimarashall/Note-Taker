const express = require ("express");
const path = require("path")

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"))

//points the server to a series of route files
require('./Routes/APIroutes')(app);
require('./Routes/htmlroutes')(app);



app.listen(PORT, () => {
    console.log(`app listening on PORT: ${PORT}`);
});