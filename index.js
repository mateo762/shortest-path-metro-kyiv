const express = require("express");
const app = express();
const path = require("path");
const PORT = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/views/home.html`);
})

app.listen(PORT, () => {
    console.log("Listening on port 3000");
})