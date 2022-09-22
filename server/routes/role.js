const roleRoute = require('express').Router();
const { RoleController } = require('../controllers/api');

roleRoute.get('/', RoleController.getDataRole);
roleRoute.post('/create', RoleController.create);
roleRoute.put('/update/:id', RoleController.update);
roleRoute.delete('/delete/:id', RoleController.delete);

module.exports = roleRoute;