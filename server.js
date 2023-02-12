const express = require("express");
const app = express();
const fs = require('fs');

// inizializzazione tramite express e richieste json
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// configuro la cartella views come principale e setup per la visualizzazione dei file html
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");
app.set("views", __dirname);


//........................ENDPOINT GET........................................

// Endpoint visualizzazione pagine html.
app.get("/", (req, res) => {
  res.render("./views/index.html");
});

// fornisce i dati puri
app.get('/dati', (req, res) => {
    console.log("Richiesta dei dati puri.");
    res.type("text/csv").sendFile(__dirname + "/views/Musei.csv");
});

//visualizzazione pagine web
app.get("/inserisci", (req, res) => {
    res.render("./views/inserisci.html");
});

app.get("/cerca", (req, res) => {
  res.render("./views/cerca.html");
});

// La richiesta permette di aggiungere un nuovo punto di interesse tramite form html.
app.get("/nuovo_museo", (req, res) => {
  let museo = ";"+ req.query.didascalia +  ";" + req.query.denominazione + ";" + req.query.localita + ";" + req.query.indirizzo + ";" + req.query.civico + 
      ";" + req.query.comune + ";" + req.query.telefono + ";" + req.query.email + ";" + req.query.sitoweb + ";" + req.query.categoria + ";" +
      req.query.categoria_sec + ";" + req.query.latitudine + ";" + req.query.longitudine + ";" + req.query.orario + ";" + req.query.noteorario + ";" + req.query.ingresso +"\n";
  // Appendo al file csv il nuovo museo
  fs.appendFileSync('./views/Musei.csv', museo);
  console.log(museo);
  res.render("./views/inserisci.html");
})

//Restituisce il dato alla posizione specificata
app.get("/indicemuseo/:indice", (req, res) => {
  let musei = CSVToArray(fs.readFileSync("./views/Musei.csv"));
  if (!isNaN(req.params.indice) && musei.length > req.params.indice && req.params.indice > 0) {
    res.status(200).send(musei[req.params.indice]);
  } else {
    res.status(404).send("Museo non presente o argomento illegale")
  }
});

const listener = app.listen(process.env.PORT, () => {
  console.log("App in ascolto nella porta " + listener.address().port);
});

// funzione per convertire da CSV ad array
function CSVToArray( strData, strDelimiter ){
		strDelimiter = (strDelimiter || ",");
		var objPattern = new RegExp(
			("(\\" + strDelimiter + "|\\r?\\n|\\r|^)" +
			 "(?:\"([^\"]*(?:\"\"[^\"]*)*)\"|" +
			 "([^\"\\" + strDelimiter + "\\r\\n]*))"),"gi");
		var arrData = [[]];
		var arrMatches = null;
		while (arrMatches = objPattern.exec( strData )){
			var strMatchedDelimiter = arrMatches[ 1 ];
			if (
				strMatchedDelimiter.length &&
				(strMatchedDelimiter != strDelimiter)
				){
				arrData.push( [] );
			}
			if (arrMatches[ 2 ]){
				var strMatchedValue = arrMatches[ 2 ].replace(
					new RegExp( "\"\"", "g" ),
					"\""
					);
			} else {
				var strMatchedValue = arrMatches[ 3 ];
			}
			arrData[ arrData.length - 1 ].push( strMatchedValue );
		}
		return(arrData);
	}
