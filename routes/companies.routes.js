const express = require('express');
const router = express.Router();
const companyController = require('../controllers/companies.controller.js');

router.get('/', companyController.list);

module.exports = router;    