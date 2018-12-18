const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const dbconfig = require('./config/database');
const passport = require('passport');
const strategy = require('./config/passport');

const app = express();

const port = 4000;


//Setup MongoDB (Requires MongoDB to be running)
mongoose.connect(dbconfig.database);
const connection = mongoose.connection;
connection.useNewUrlParser = dbconfig.useNewUrlParser;
connection.once('connected', ()=> {
    console.log('Database connection established to ' + dbconfig.database);
});
// error for missing database
connection.once('error', (err) => {
    console.log('Database error: ' + err);
});


//CORS setup
app.use(cors());

//Body parser setup
app.use(bodyParser.json());

//Add Router options
const company = require('./routes/company');
const review = require('./routes/review');
const auth = require('./routes/users');
const router = express.Router();
router.use('/company', company);
router.use('/review', review);
router.use('/authentication', auth);
app.use('/api', router);


//Passport init
app.use(passport.initialize());
app.use(passport.session());
strategy(passport);


//trying to access index.html from backend
app.get('/', (req, res) => {
    res.send('Invalid Endpoint');
});

//check if server have been started
app.listen(port, () => {
    console.log('Server has started on port ' + port);
});