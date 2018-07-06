const express = require('express');
const router = express.Router();
const companyController = require('../controllers/companies.controller.js');

router.get('/create', companyController.create);
router.post('/create', companyController.doCreate);

router.get('/', companyController.list);

router.get('/:code', companyController.getDetails);

router.post('/:id/delete', companyController.doDelete);

module.exports = router;    