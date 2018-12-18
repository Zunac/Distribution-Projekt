const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');

const User = require('../SchemaFolder/UserSchema');

router.route('/register').post((req, res) => {
    let newUser = new User({
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        pw: req.body.password
    });

    User.registerUser(newUser, (err, user) => {
        if(err){
            res.json({
                success: false,
                msg: 'Failed to register user'
            });
            console.log(err);
        } else {
            res.json({
                success: true,
                msg: 'Successfully added the user to the database'
            });
        }
    })
});

router.route('/authenticate').post((req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    User.getUserByUsername(username, (err, user) => {
        if(err) {
            console.log(err);
        }
        if(!user){
            return res.json({
                success: false,
                msg: 'User not found'
            });
        }
        User.comparePassword(password, user.pw, (err, isMatch) => {
            if(err){
                console.log(err);
            }
            if(isMatch){
                const token = jwt.sign({data: user}, config.secret, {
                    expiresIn: 604800
                })
                console.log(config.secret);
                res.json({
                    success: true,
                    token: token,
                    user: {
                        id: user._id,
                        username: user.username,
                        name: user.name,
                        email: user.email
                    }
                });
            } else {
                return res.json({
                    success: false,
                    msg: 'Could not match the password'
                });
            }
        });
    })
});

router.route('/profile').get(passport.authenticate('jwt',{session: false}), (req, res) => {
    res.json({user: req.user});
});

router.route('/verifyToken').post((req, res) => {
    jwt.verify(req.body.token, config.secret, function(err, decoded) {
        if(err){
            return res.json({
                success: false,
                msg: 'Token expired'
            });
        } else {
            return res.json({
                success: true,
                msg: 'Token up to date'
            });
        }
    })
})


module.exports = router;