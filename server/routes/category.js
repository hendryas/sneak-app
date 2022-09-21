const categoryRoute = require('express').Router();
const { CategoryController } = require('../controllers/api');

categoryRoute.get('/', CategoryController.getDataCategory);
categoryRoute.post('/create', CategoryController.create);
categoryRoute.put('/update/:id', CategoryController.update);
categoryRoute.delete('/delete/:id', CategoryController.delete);

module.exports = categoryRoute;