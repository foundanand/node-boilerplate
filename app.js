const express = require('express');
const app = express();
require('dotenv').config();
const bodyParser = require('body-parser');
const userRouter = require('./src/router/user.router');

app.use(bodyParser.json());
app.use('/api/v1/user', userRouter);

module.exports = app;