const userRouter = require('express').Router();
const { UserController } = require('../controllers/api');

userRouter.get('/', UserController.getDataUser);
userRouter.post('/createaccountcustomer', UserController.createAccountCustomer);
userRouter.post('/createaccountadmin', UserController.createAccountAdmin);
userRouter.post('/createaccountcustomerfromadmin', UserController.createAccountCustomerFromAdmin);
userRouter.put('/updateaccountadmin/:id', UserController.updateAccountAdmin);
userRouter.put('/updateaccountcustomer/:id', UserController.updateAccountCustomer);
userRouter.put('/updateaccountcustomerfromadmin/:id', UserController.updateAccountCustomerFromAdmin);
userRouter.delete('/deleteaccountcustomer/:id', UserController.deleteAccountCustomer);
userRouter.delete('/deleteaccountadmin/:id', UserController.deleteAccountAdmin);
userRouter.delete('/deleteaccountcustomerfromadmin/:id', UserController.deleteAccountCustomerFromAdmin);

module.exports = userRouter;