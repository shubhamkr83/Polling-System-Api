const express = require('express')
const Router = express.Router()

const homeController = require('../controller/home');
// action points of all the api/v1/questions
Router.get('/', homeController.home);
Router.use('/question', require('./questions'));
Router.use('/options', require('./options'))

module.exports = Router