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

module.exports.create = (req,res,next) => {
    res.render("companies/form", {
        company: new Company()
    });
}

module.exports.doCreate = (req, res, next) => {
    let company = new Company(req.body);
    console.log(req.body);
    company.save()
        .then(()=> {    
            res.redirect('/companies');
            console.info('Compañía cargá');
        })
        .catch(error => {
            console.error(error);
            if (error instanceof mongoose.Error.ValidationError) {
                res.render('/companies/form', {company, error:error.errors});
            }
        })

}