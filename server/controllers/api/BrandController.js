const { brand } = require('../../models');

class BrandController {
    static async getDataBrand(req, res) {
        try {
            let result = await brand.findAll();
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async create(req, res) {
        try {
            const { name } = req.body;
            let result = await brand.create({
                name
            })
            res.status(201).json(result);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async update(req, res) {
        try {
            const id = +req.params.id;
            const { name } = req.body;
            let result = await brand.update({
                name
            }, {
                where: { id }
            })
            if (result == 1) {
                res.status(201).json({
                    message: `Data Brand dengan ID: ${id} berhasil di Update!`
                });
            } else {
                res.status(404).json({
                    message: `Data Brand dengan ID: ${id} tidak ditemukan!`
                })
            }
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async delete(req, res) {
        try {
            const id = +req.params.id;
            let result = await brand.destroy({
                where: { id }
            })
            result === 1 ?
                res.status(200).json({
                    message: `Data Brand dengan ID: ${id} berhasil di hapus!`
                }) :
                res.status(404).json({
                    message: `Data Brand dengan ID: ${id} tidak ditemukan!`
                })
        } catch (error) {
            res.status(500).json(error);
        }
    }
}

module.exports = BrandController;