const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const dbconfig = require('./config/database');

const app = express();

const port = 4000;

//CORS setup
app.use(cors());

//Body parser setup
app.use(bodyParser.json());

//Add Router options
const company = require('./routes/company');
const review = require('./routes/review');
const router = express.Router();
router.use('/company', company);
router.use('/review', review);
app.use('/api', router);

//Setup MongoDB (Requires MongoDB to be running)
mongoose.connect(dbconfig.database);
const connection = mongoose.connection;
connection.once('connected', ()=> {
    console.log('Database connection established to ' + dbconfig.database);
});
// error
connection.once('error', (err) => {
    console.log('Database error: ' + err);
});

//trying to access index.html from backend
app.get('/', (req, res) => {
    res.send('Invalid Endpoint');
});

//check if server have been started
app.listen(port, () => {
    console.log('Server has started on port ' + port);
});