const express = require('express');
const routes = express.Router();

const UserController = require('../app/controllers/UserController');
const HomeController = require('../app/controllers/HomeController');


routes.get('/', HomeController.index);
routes.get('/sign_in', UserController.renderSignIn);


module.exports = routes;