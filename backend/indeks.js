const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql");

const app = express();
const port = 3000;

// Parser za JSON podatke
app.use(bodyParser.json());
app.use(cors());

// Parser za podatke iz formi
app.use(bodyParser.urlencoded({ extended: true }));

const connection = mysql.createConnection({
    host: 'ucka.veleri.hr',
    user: 'aavgustinovic',
    password: '11',
    database: 'aavgustinovic'
  });
  
app.use(express.urlencoded({ extended: true }));

app.get("/api/knjige", (req, res) => {
    connection.query("SELECT * FROM knjiga", (error, results) => {
      if (error) throw error;
      res.send(results);
    });
});
app.get("/api/knjige/:naslov", (req, res) => {
    connection.query("SELECT * FROM knjiga WHERE naslov like "%naziv%"", (error, results) => {
      if (error) throw error;
      res.send(results);
    });
}); 
app.get("/api/knjige/:autor", (req, res) => {
    connection.query("SELECT (knjiga.stanje - count(rezervacija.knjiga)) as slobodne, knjiga.id, knjiga.naslov, knjiga.stanje FROM `knjiga` left join rezervacija on knjiga.id=rezervacija.knjiga group by knjiga.id", (error, results) => {
      if (error) throw error;
      res.send(results);
    });
});
app.get("/api/slob_knjige/:id_knjige", (req, res) => {
    connection.query("SELECT * FROM knjiga WHERE id_knjige like "%id_knjige%"", (error, results) => {
      if (error) throw error;
      res.send(results);
    });
});
app.get("/api/rezerv_knjige", (req, res) => {
  connection.query(`SELECT knjiga.naslov, knjiga.autor, rezervacija.korisnik, rezervacija.datum_rez FROM knjiga INNER JOIN rezervacija ON knjiga.id = rezervacija.id`, (error, results) => {
      if (error) throw error;
      res.send(results);
    });
});       
app.get("/api/rezerv_knjige_korisnici", (req, res) => {
    connection.query("/api/rezerv_knjige_korisnici	GET	Lista rezerviranih knjiga s korisnicima	SELECT * FROM knjiga, rezervacija, korisnik WHERE knjiga.id=rezervacija.knjiga and korisnik.id=rezervacija.korisnik", (error, results) => {
      if (error) throw error;
      res.send(results);
    });
});
app.get("/api/rezerv_knjige/:id_korisnik", (req, res) => {
    connection.query("SELECT * FROM knjiga, rezervacija, korisnik WHERE knjiga.id=rezervacija.knjiga and korisnik.id=rezervacija.korisnik AND korisnik.id=id_korisnik", (error, results) => {
      if (error) throw error;
      res.send(results);
    });
});
app.get("/api/rezerv_knjige/:id_knjiga", (req, res) => {
    connection.query("SELECT * FROM knjiga, rezervacija, korisnik WHERE knjiga.id=rezervacija.knjiga and korisnik.id=rezervacija.korisnik AND knjiga.id=id_knjiga", (error, results) => {
      if (error) throw error;
      res.send(results);
    });
});
app.get("/api/korisnici", (req, res) => {
    connection.query("SELECT * FROM korisnici", (error, results) => {
      if (error) throw error;
      res.send(results);
    });
});
app.get("/api/korisnici/:id_korisnik", (req, res) => {
    connection.query("SELECT id_korisnik FROM korisnici", (error, results) => {
      if (error) throw error;
      res.send(results);
    });
});

//PUT

app.post("/api/rezerv_knjige", (req, res) => {
    const data = req.body;
    rezervacija = [[date.today, data.id_knjiga, data.id_korisnik]]
    connection.query("INSERT INTO rezervacija (datum, knjiga, korisnik) VALUES ?", [rezervacija], (error, results) => {
      if (error) throw error;
      res.send(results);
    });
  });
  

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

  app.listen(port, () => {
    console.log("Server running at port: " + port);
});
