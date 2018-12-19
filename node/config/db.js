const mongoose = require("mongoose");
const keys = require("./keys.js");



//Connect to MongoDB database
mongoose.connect(keys.mongoDB.dbURI);

//
const connection = mongoose.connection;
connection.once('open', (err) => {
    if(err){
        console.log("Error occurred connecting to the database  " + err)
    } else {
        console.log("Successful connection to the Database");
    }


});