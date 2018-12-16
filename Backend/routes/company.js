const express = require('express');
const router = express.Router();

const Company = require('../SchemaFolder/CompanySchema');


router.route('/addcompany').post((req, res) => {
   let company = new Company({
       id: req.body.id,
       description: req.body.description,
       name: req.body.name,
       email: req.body.email,
       country: req.body.country,
       address: req.body.address,
       rating: req.body.rating
   });
   Company.addCompany(company, (err, comp) => {
       if(err){
           res.json({success: false, msg:'Failed to add to the database'});
       } else {
           res.json({success: true, msg: 'Successfully added to the database'});
       }
   })
});

router.route('/companies').get((req, res) => {
    Company.find((err, companies) => {
        if(err){
            console.log(err);
        } else {
            res.json(companies);
        }
    });
});

router.route('/companybyname/:name').get((req, res) => {
    Company.getCompanyByCompanyName(req.params.name, (err, companies) => {
        if(err){
            console.log(err);
        } else {
            res.json(companies);
        }
    });
});

router.route('/companybyid/:id').get((req, res) => {
    Company.getCompanyById(req.params.id, (err, companies) => {
        if(err){
            console.log(err);
        } else {
            res.json(companies);
        }
    });
});

router.route('/remove/:id').get((req, res) => {
    console.log('deleting')
    Company.removeCompany(req.params.id, (err, company) => {
        if(err){
            res.json(err);
        } else {
            res.json('Removed company succesfully');
        }
    });
});

module.exports = router;