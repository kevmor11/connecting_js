const pg = require("pg");
const settings = require("./settings"); // settings.json

const client = new pg.Client({
  "user": "development",
  "password": "development",
  "database": "vagrant",
  "hostname": "localhost",
  "port": 5432,
  "ssl": true
});

client.connect((err) => {
  if (err) {
    return console.error("Connection Error", err);
  }
  client.query("SELECT $1::int AS number", ["1"], (err, result) => {
    if (err) {
      return console.error("error running query", err);
    }
    // console.log(result);
    console.log(result.rows[0].number);
    client.end();
  });
});