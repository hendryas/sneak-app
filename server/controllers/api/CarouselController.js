const { carousel } = require('../../models');

class CarouselController {
    static async getDataCarousel(req, res) {
        try {
            let result = await carousel.findAll();
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async create(req, res) {
        try {
            const { color, title, image } = req.body;
            let result = await carousel.create({
                color, title, image
            })
            res.status(201).json(result);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async update(req, res) {
        try {
            const id = +req.params.id;
            const { color, title, image } = req.body;
            let result = await carousel.update({
                color, title, image
            }, {
                where: { id }
            })
            if (result == 1) {
                res.status(201).json({
                    message: `Data Carousel dengan ID: ${id} berhasil di Update!`
                });
            } else {
                res.status(404).json({
                    message: `Data Carousel dengan ID: ${id} tidak ditemukan!`
                })
            }
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async delete(req, res) {
        try {
            const id = +req.params.id;
            let result = await carousel.destroy({
                where: { id }
            })
            result === 1 ?
                res.status(200).json({
                    message: `Data Carousel dengan ID: ${id} berhasil di hapus!`
                }) :
                res.status(404).json({
                    message: `Data Carousel dengan ID: ${id} tidak ditemukan!`
                })
        } catch (error) {
            res.status(500).json(error);
        }
    }
}

module.exports = CarouselController;