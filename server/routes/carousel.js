const carouselRoute = require('express').Router();
const { CarouselController } = require('../controllers/api');

carouselRoute.get('/', CarouselController.getDataCarousel);
carouselRoute.post('/create', CarouselController.create);
carouselRoute.put('/update/:id', CarouselController.update);
carouselRoute.delete('/delete/:id', CarouselController.delete);

module.exports = carouselRoute;