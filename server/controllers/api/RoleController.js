const { role } = require('../../models');

class RoleController {
    static async getDataRole(req, res) {
        try {
            let result = await role.findAll();
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async create(req, res) {
        try {
            const { role_name } = req.body;
            let result = await role.create({
                role_name
            })
            res.status(201).json(result);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async update(req, res) {
        try {
            const id = +req.params.id;
            const { role_name } = req.body;
            let result = await role.update({
                role_name
            }, {
                where: { id }
            })
            if (result == 1) {
                res.status(201).json({
                    message: `Data Role dengan ID: ${id} berhasil di Update!`
                });
            } else {
                res.status(404).json({
                    message: `Data Role dengan ID: ${id} tidak ditemukan!`
                })
            }
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async delete(req, res) {
        try {
            const id = +req.params.id;
            let result = await role.destroy({
                where: { id }
            })
            result === 1 ?
                res.status(200).json({
                    message: `Data Role dengan ID: ${id} berhasil di hapus!`
                }) :
                res.status(404).json({
                    message: `Data Role dengan ID: ${id} tidak ditemukan!`
                })
        } catch (error) {
            res.status(500).json(error);
        }
    }
}

module.exports = RoleController;