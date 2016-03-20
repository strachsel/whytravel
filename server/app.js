const express       = require('express');
const path          = require('path');
const bodyParser    = require('body-parser');
const logger        = require('morgan');
const router        = require('./router');
const app           = express();
const public        = path.join( __dirname + '/public');

app.use(bodyParser.json());
app.use(logger('dev'));
app.use('/', router);
app.use(express.static(public, {redirect : false}));
module.exports = app;
