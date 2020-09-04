const express = require('express');
const path = require("path");
const publicPath = path.join(__dirname, "./public");
const app = express();

const MongoClient = require("mongodb").MongoClient;
const uri = "mongodb+srv://frudent:toLi62tL7wdlali3@cluster0-3woch.mongodb.net/test?retryWrites=true&w=majority"
const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

app.get("/", (req, res) => {
    res.sendFile(path.join(publicPath, "index.html"));
  });
  
app.get('/workers', (req, res) => {
    client.connect((err) => {
        if (err) {
            console.log(err);
        }
        let db = client.db("trombinoscope");
        let collection = db.collection("workers");
        collection.find().toArray((err, result) => {
            if (err) {console.log(err);}
            else { 
                return res.json(result)}
        })
    })
    
})

app.listen(process.env.PORT || 5000, console.log("--> serveur connecté au port 5000"));
