const express = require('express');
const router = express.Router();
const passport = require('passport');

const Review = require('../SchemaFolder/ReviewSchema');

router.route('/addreview').post(passport.authenticate('jwt', {session: false}), (req, res) => {
    let review = new Review({
        id: req.body.id,
        title: req.body.title,
        username: req.body.username,
        companyname: req.body.companyname,
        rating: req.body.rating,
        review: req.body.review
    });

    Review.addReview(review, (err, rev) => {
        if(err){
            res.json({success: false, msg:'Failed to add review to the database'});
            console.log(err);
        } else {
            res.json({success: true, msg:'Successfully added review to database'});
        }
    });
});

router.route('/getcompanyreview/:name').get((req, res) => {
    Review.getReviewsByCompanyName(req.params.name, (err, review) => {
        if(err){
            res.json({success: false, msg:'Failed to get the reviews for this company'});
            console.log(err);
        } else {
            res.json(review);
        }
    })
});

router.route('/getcompanyreview/:username').get(passport.authenticate('jwt',{session: false}), (req, res) => {
    Review.getReviewsByUsername(req.params.username, (err, review) => {
        if(err){
            res.json({success: false, msg:'Failed to get the reviews from the user'});
            console.log(err);
        } else {
            res.json(review);
        }
    })
});

router.route('/getcompanyreview').get((req, res) => {
    Review.find((err, review) => {
        if(err){
            res.json({success: false, msg:'Failed to get the reviews from the company'});
            console.log(err);
        } else {
            res.json(review);
        }
    })
});

router.route('/removereview').get(passport.authenticate('jwt',{session: false}), (req, res) => {
    Review.removeReview(req.params.username, req.params.companyname, (err, review) => {
        if(err){
            res.json({success: false, msg:'Failed to remove review'});
            console.log(err);
        } else {
            res.json({success: true, msg:'Successfully removed review from database'});
        }
    })
});

module.exports = router;
