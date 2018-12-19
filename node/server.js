const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");


var app = express();
const router = express.Router();

app.use(cors())
app.use(bodyParser.json());


const MongoClient = require('mongodb').MongoClient;
const res = "mongodb+srv://TestUser:eRpJtMzVEmEEKg5@pilottrustdb-gqm8o.mongodb.net/test?retryWrites=true";
const uri = encodeURI(res);
const client = new MongoClient(uri, { useNewUrlParser: true });


client.connect(err => {
    if (err) {
        console.log("An error occured connecting to the mongoDB" + err);
    } else {
        const collection = client.db("pilottrustdb").collection("Companies");
        console.log(collection.toString());

        client.close();
    }
});



const port = process.env.PORT || 4000;
app.listen(port, () => console.log('Express server running at http://localhost:${port}...'))



