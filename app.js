const PORT = 3000;
const companyRouter = require(`./routes/companies.routes`);

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const createError = require('http-errors');
const logger = require('morgan');

const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

require('./configs/db.config.js');
require('./configs/hbs.config.js');

app.use("/companies",companyRouter)



app.listen(PORT, console.info('All right!'));