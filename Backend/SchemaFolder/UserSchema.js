const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

const Schema = mongoose.Schema;

let UserSchema = new Schema({
    name: {
        type: String,
        required: false
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    pw: {
        type: String,
        required: true
    }
});

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.registerUser = function (user, callback) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(user.pw, salt, (err, hash) => {
            if(err) throw err;
            user.pw = hash;
            user.save(callback);
        });
    });
};

module.exports.getUserById = function (id, callback) {
    const query = ({_id: id});
    User.findOne(query, callback);
};

module.exports.getUserByUsername = function (username, callback) {
    const query = ({username: username});
    User.findOne(query, callback);
}

module.exports.comparePassword = function(userpassword, hash, callback) {
    bcrypt.compare(userpassword, hash, (err, isMatch) => {
        if(err){
            console.log(err);
        }
        callback(null, isMatch);
    })
}



