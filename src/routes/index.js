const express = require('express');
const routes = express.Router();

const UserController = require('../app/controllers/UserController');
const HomeController = require('../app/controllers/HomeController');


routes.get('/', HomeController.index);
routes.get('/sign_in', UserController.renderSignIn);

routes.get('/consultation', UserController.renderConsultation);
routes.post('/consultation', UserController.renderConsultation);

routes.get('/forgot_password', UserController.renderForgotPassword);


module.exports = routes;