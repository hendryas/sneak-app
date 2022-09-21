const route = require('express').Router();

route.get('/api', (req, res) => {
    res.status(200).json({
        message: `Welcome to Sneak App`,
    });
});

const bankRoutes = require('./bank');
route.use('/api/banks', bankRoutes);

const brandRoutes = require('./brand');
route.use('/api/brands', brandRoutes);

const carouselRoutes = require('./carousel');
route.use('/api/carousels', carouselRoutes);

const categoryRoutes = require('./category');
route.use('/api/categories', categoryRoutes);

const rekeningRoutes = require('./rekening');
route.use('/api/rekenings', rekeningRoutes);

const recipientAddressRoutes = require('./recipientaddress');
route.use('/api/recipientaddress', recipientAddressRoutes);

const roleRoutes = require('./role');
route.use('/api/roles', roleRoutes);

const statusPaymentRoutes = require('./statuspayment');
route.use('/api/statuspayments', statusPaymentRoutes);

const userRoutes = require('./user');
route.use('/api/users', userRoutes);

module.exports = route;