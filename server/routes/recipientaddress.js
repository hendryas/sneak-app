const recipientAddressRoute = require('express').Router();
const { RecipientAddressController } = require('../controllers/api');

recipientAddressRoute.get('/', RecipientAddressController.getDataRecipientAddress);
recipientAddressRoute.get('/detail', RecipientAddressController.getDataRecipientAddressByUserId);
recipientAddressRoute.post('/create', RecipientAddressController.create);
recipientAddressRoute.put('/update/:id', RecipientAddressController.update);
recipientAddressRoute.delete('/delete/:id', RecipientAddressController.delete);

module.exports = recipientAddressRoute;