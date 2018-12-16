const express = require('express');
const router = express.Router();

const Review = require('../SchemaFolder/ReviewSchema');

router.route('/addreview').post((req, res) => {
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
        } else {
            res.json({success: true, msg:'Successfully added review to database'});
        }
    });
});

router.route('/getcompanyreview/:name').get((req, res) => {
    Review.getReviewsByCompanyName(req.params.name, (err, review) => {
        if(err){
            res.json(err);
        } else {
            res.json(review);
        }
    })
});

router.route('/getcompanyreview/:username').get((req, res) => {
    Review.getReviewsByUsername(req.params.username, (err, review) => {
        if(err){
            res.json(err);
        } else {
            res.json(review);
        }
    })
});

router.route('/getcompanyreview').get((req, res) => {
    Review.find((err, review) => {
        if(err){
            res.json(err);
        } else {
            res.json(review);
        }
    })
});

router.route('/removereview').get((req, res) => {
    Review.removeReview(req.params.username, req.params.companyname, (err, review) => {
        if(err){
            res.json(err);
        } else {
            res.json({success: true, msg:'Successfully removed review from database'});
        }
    })
});

module.exports = router;
