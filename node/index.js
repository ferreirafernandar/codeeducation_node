const express = require("express");
const app = express();
const port = 3000;
const config = {
  host: "db",
  user: "root",
  password: "root",
  database: "nodedb",
};
const mysql = require("mysql");
const connection = mysql.createConnection(config);

const sql = `INSERT INTO people(name) values('Adora Alice')`;
connection.query(sql);

app.get("/", (req, res) => {
  connection.connect(function (err) {
    connection.query(
      "SELECT name FROM people",
      function (err, results, fields) {
        var html = "";
        html = "<h1>Full Cycle Rocks!</h1>";
        html += "<ul>";
        for (var i in results) html += "<li>" + results[i].name + "</li>";
        html += "</ul>";
        res.send(html);
      }
    );
  });
});

app.listen(port, () => {
  console.log("Rodando na porta " + port);
});
