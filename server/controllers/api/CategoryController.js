const { category } = require('../../models');

class CategoryController {
    static async getDataCategory(req, res) {
        try {
            let result = await category.findAll();
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async create(req, res) {
        try {
            const { name, icon } = req.body;
            let result = await category.create({
                name, icon
            })
            res.status(201).json(result);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async update(req, res) {
        try {
            const id = +req.params.id;
            const { name, icon } = req.body;
            let result = await category.update({
                name, icon
            }, {
                where: { id }
            })
            if (result == 1) {
                res.status(201).json({
                    message: `Data Category dengan ID: ${id} berhasil di Update!`
                });
            } else {
                res.status(404).json({
                    message: `Data Category dengan ID: ${id} tidak ditemukan!`
                })
            }
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async delete(req, res) {
        try {
            const id = +req.params.id;
            let result = await category.destroy({
                where: { id }
            })
            result === 1 ?
                res.status(200).json({
                    message: `Data Category dengan ID: ${id} berhasil di hapus!`
                }) :
                res.status(404).json({
                    message: `Data Category dengan ID: ${id} tidak ditemukan!`
                })
        } catch (error) {
            res.status(500).json(error);
        }
    }
}

module.exports = CategoryController;