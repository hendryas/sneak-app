const rekeningRoute = require('express').Router();
const { RekeningController } = require('../controllers/api');

rekeningRoute.get('/', RekeningController.getDataRekening);
rekeningRoute.post('/create', RekeningController.create);
rekeningRoute.put('/update/:id', RekeningController.update);
rekeningRoute.delete('/delete/:id', RekeningController.delete);

module.exports = rekeningRoute;