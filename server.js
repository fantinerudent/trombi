const express = require("express");
const path = require("path");
const publicPath = path.join(__dirname, "./public");
const app = express();

const MongoClient = require("mongodb").MongoClient;
const uri =
  "mongodb+srv://frudent:toLi62tL7wdlali3@cluster0-3woch.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get("/", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

// route to get all the workers in the DB;
app.get("/workers", (req, res) => {
  client.connect((err) => {
    if (err) {
      console.log(err);
    }
    let db = client.db("trombinoscope");
    let collection = db.collection("workers");
    collection.find().toArray((err, result) => {
      if (err) {
        console.log(err);
      } else {
        return res.json(result);
      }
    });
  });
});

// route to login as an administrator.
app.post("/login", (req, res) => {});

// route to add a new worker in the DB when you're an administrator
// TODO : create a new middleware to check if I'm a admnistrator
app.post("/workers/update/add", (req, res) => {});
// route to delete a worker in the DB when you're an administrator
app.post("/workers/update/delete", (req, res) => {});

app.listen(
  process.env.PORT || 5000,
  console.log("--> serveur connecté au port 5000")
);
