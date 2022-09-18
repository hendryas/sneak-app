const { navigation } = require('../../models');

class Navigation {
    static async getDataNavigation(req, res) {
        try {
            let result = await navigation.findAll();
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async create(req, res) {
        try {
            const { title, icon } = req.body;
            let result = await navigation.create({
                title, icon
            })
            res.status(201).json(result);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async update(req, res) {
        try {
            const id = +req.params.id;
            const { title, icon } = req.body;
            let result = await navigation.update({
                title, icon
            }, {
                where: { id }
            })
            if (result == 1) {
                res.status(201).json({
                    message: `Data Navigation dengan ID: ${id} berhasil di Update!`
                });
            } else {
                res.status(404).json({
                    message: `Data Navigation dengan ID: ${id} tidak ditemukan!`
                })
            }
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async delete(req, res) {
        try {
            const id = +req.params.id;
            let result = await navigation.destroy({
                where: { id }
            })
            result === 1 ?
                res.status(200).json({
                    message: `Data Navigation dengan ID: ${id} berhasil di hapus!`
                }) :
                res.status(404).json({
                    message: `Data Navigation dengan ID: ${id} tidak ditemukan!`
                })
        } catch (error) {
            res.status(500).json(error);
        }
    }
}

module.exports = Navigation;