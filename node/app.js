const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const company = require("./models/company.js");

const app = express();
const router = express.Router();

//Allows the server to recieve requests outside itself
app.use(cors());
//In order parse the josn requests
app.use(bodyParser.json());


//Getting access to db connection
require("./config/db.js");



//Create listener on the port number
const port = process.env.PORT || 8001;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}...`);
});


//Routing HTTP requests (via queries to the database) based on each schema
app.use('/',router);
router.route('/companies').get((req, res)=> {
   company.find((err, companies) => {
       if(err){
           console.log("An error occurred while finding companies: " + err);
       } else
           res.json(companies);
    });
});
