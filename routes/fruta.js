'use strict'

var express = require('express');
var frutaController = require('../controllers/fruta');

var api = express.Router();

api.get('/tests', frutaController.pruebas);
api.post('/fruta', frutaController.saveFruta);
api.get('/frutas', frutaController.getFrutas);
api.get('/fruta/:id', frutaController.getFruta);

module.exports = api;