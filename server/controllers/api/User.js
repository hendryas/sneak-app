const { user } = require('../../models');

class User {
    static async getDataUser(req, res) {
        try {
            let result = await user.findAll();
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async createAccountAdmin(req, res) {
        try {
            const { name, email, password, image } = req.body;
            let role_id = 2;
            let is_active = 1;
            let result = await user.create({
                name, email, password, image, role_id, is_active
            })
            res.status(201).json(result);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async createAccountCustomerFromAdmin(req, res) {
        try {
            const { name, email, password, image } = req.body;
            let role_id = 3;
            let is_active = 1;
            let result = await user.create({
                name, email, password, image, role_id, is_active
            })
            res.status(201).json(result);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    // static async createAccountCustomer(req, res){
    //     try {

    //     } catch (error) {
    //         res.status(500).json(error);
    //     }
    // }

    static async updateAccountAdmin(req, res) {
        try {
            const id = +req.params.id;
            const { name, email, password, image } = req.body;
            let result = await user.update({
                name, email, password, image
            }, {
                where: { id }
            })
            if (result == 1) {
                res.status(201).json({
                    message: `Data Akun Admin dengan ID: ${id} berhasil di Update!`
                });
            } else {
                res.status(404).json({
                    message: `Data Akun Admin dengan ID: ${id} tidak ditemukan!`
                })
            }
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async updateAccountCustomerFromAdmin(req, res) {
        try {
            const id = +req.params.id;
            const { name, email, password, image } = req.body;
            let result = await user.update({
                name, email, password, image
            }, {
                where: { id }
            })
            if (result == 1) {
                res.status(201).json({
                    message: `Data Akun Customer dengan ID: ${id} berhasil di Update!`
                });
            } else {
                res.status(404).json({
                    message: `Data Akun Customer dengan ID: ${id} tidak ditemukan!`
                })
            }
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async updateAccountCustomer(req, res) {
        try {
            const id = +req.params.id;
            const { name, email, password, image } = req.body;
            let result = await user.update({
                name, email, password, image
            }, {
                where: { id }
            })
            if (result == 1) {
                res.status(201).json({
                    message: `Data Akun Customer dengan ID: ${id} berhasil di Update!`
                });
            } else {
                res.status(404).json({
                    message: `Data Akun Customer dengan ID: ${id} tidak ditemukan!`
                })
            }
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async deleteAccountAdmin(req, res) {
        try {
            const id = +req.params.id;
            let result = await user.destroy({
                where: { id }
            })
            result === 1 ?
                res.status(200).json({
                    message: `Data Akun Admin dengan ID: ${id} berhasil di hapus!`
                }) :
                res.status(404).json({
                    message: `Data Akun Admin dengan ID: ${id} tidak ditemukan!`
                })
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async deleteAccountCustomerFromAdmin(req, res) {
        try {
            const id = +req.params.id;
            let result = await user.destroy({
                where: { id }
            })
            result === 1 ?
                res.status(200).json({
                    message: `Data Akun Customer dengan ID: ${id} berhasil di hapus!`
                }) :
                res.status(404).json({
                    message: `Data Akun Customer dengan ID: ${id} tidak ditemukan!`
                })
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async deleteAccountCustomer(req, res) {
        try {
            const id = +req.params.id;
            let result = await user.destroy({
                where: { id }
            })
            result === 1 ?
                res.status(200).json({
                    message: `Data Akun Customer dengan ID: ${id} berhasil di hapus!`
                }) :
                res.status(404).json({
                    message: `Data Akun Customer dengan ID: ${id} tidak ditemukan!`
                })
        } catch (error) {
            res.status(500).json(error);
        }
    }
}

module.exports = User;