const { bank } = require('../../models');
var randomstring = require("randomstring");

class BankController {
    static async getDataBank(req, res) {
        try {
            let result = await bank.findAll();
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async create(req, res) {
        try {
            const { nama_bank } = req.body;
            const kode = randomstring.generate(10).toUpperCase();
            let result = await bank.create({
                kode, nama_bank
            })
            res.status(201).json(result);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async update(req, res) {
        try {
            const id = +req.params.id;
            const { nama_bank } = req.body;
            let result = await bank.update({
                nama_bank
            }, {
                where: { id }
            })

            if (result == 1) {
                res.status(201).json({
                    message: `Data Bank dengan ID: ${id} berhasil di Update!`
                });
            } else {
                res.status(404).json({
                    message: `Data Bank dengan ID: ${id} tidak ditemukan!`
                })
            }
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async delete(req, res) {
        try {
            const id = +req.params.id;
            let result = await bank.destroy({
                where: { id }
            })
            result === 1 ?
                res.status(200).json({
                    message: `Data Bank dengan ID: ${id} berhasil di hapus!`
                }) :
                res.status(404).json({
                    message: `Data Bank dengan ID: ${id} tidak ditemukan!`
                })
        } catch (error) {
            res.status(500).json(error);
        }
    }
}

module.exports = BankController;