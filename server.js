const express = require("express");
const app = express();
const fs = require('fs');

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");
app.set("views", __dirname);


//............................................................................
app.get("/", (req, res) => {
  res.render("./views/index.html");
});

app.get('/dati', (req, res) => {
    console.log("Richiesta dei dati puri.");
    res.type("").sendFile("./views/Musei.csv");
});

app.get("/inserisci", (req, res) => {
    res.render("./views/inserisci.html");
});

app.get("/cerca", (req, res) => {
  res.render("./views/cerca.html");
});

const listener = app.listen(process.env.PORT, () => {
  console.log("App in ascolto nella porta " + listener.address().port);
});

