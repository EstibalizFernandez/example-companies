const mongoose = require('mongoose');
const Company = require('../models/company.model.js');

module.exports.list = (req, res, next) => {
    Company.find()
        .then(companies => {
            res.render('companies/index.hbs', {
                companies
            })
        })
        .catch(error => {
            console.error('Erró', error)
        })
}