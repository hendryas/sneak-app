const statusPaymentRoute = require('express').Router();
const { StatusPaymentController } = require('../controllers/api');

statusPaymentRoute.get('/', StatusPaymentController.getDataStatusPayment);
statusPaymentRoute.post('/create', StatusPaymentController.create);
statusPaymentRoute.put('/update/:id', StatusPaymentController.update);
statusPaymentRoute.delete('/delete/:id', StatusPaymentController.delete);

module.exports = statusPaymentRoute;