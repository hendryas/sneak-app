const brandRoute = require('express').Router();
const { BrandController } = require('../controllers/api');

brandRoute.get('/', BrandController.getDataBrand);
brandRoute.post('/create', BrandController.create);
brandRoute.put('/update/:id', BrandController.update);
brandRoute.delete('/delete/:id', BrandController.delete);

module.exports = brandRoute;