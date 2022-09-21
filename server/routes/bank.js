const bankRoute = require('express').Router();
const { BankController } = require('../controllers/api');

bankRoute.get('/', BankController.getDataBank);
bankRoute.post('/create', BankController.create);
bankRoute.put('/update/:id', BankController.update);
bankRoute.delete('/delete/:id', BankController.delete);

module.exports = bankRoute;