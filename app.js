//let express = require('express');
import 'dotenv/config.js'
import './config/database.js'
import createError from 'http-errors'
import express from 'express'
//let path = require('path');
import path from 'path'
//let cookieParser = require('cookie-parser');
import cookieParser from 'cookie-parser';
//let logger = require('morgan');
import logger from 'morgan'

//let indexRouter = require('./routes/index');
import indexRouter from './routes/index.js'
//let usersRouter = require('./routes/users');

import { __dirname } from './utils.js';

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
    res.render('error');
  });
  
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);


export default app;
