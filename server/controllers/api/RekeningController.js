const { rekening, bank } = require('../../models');
var randomstring = require("randomstring");

class Rekening {
    static async getDataRekening(req, res) {
        try {
            let dataBank = await bank.findAll();
            let result = await rekening.findAll();
            res.status(200).json({
                result, dataBank
            });
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async create(req, res) {
        try {
            const { kode_bank, no_rekening, atas_nama } = req.body;
            const kode = randomstring.generate(10).toUpperCase();
            let result = await rekening.create({
                kode, kode_bank, no_rekening, atas_nama
            })
            res.status(201).json(result);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async update(req, res) {
        try {
            const id = +req.params.id;
            const { kode_bank, no_rekening, atas_nama } = req.body;
            let result = await rekening.update({
                kode_bank, no_rekening, atas_nama
            }, {
                where: { id }
            })

            if (result == 1) {
                res.status(201).json({
                    message: `Data Rekening dengan ID: ${id} berhasil di Update!`
                })
            } else {
                res.status(404).json({
                    message: `Data Rekening dengan ID: ${id} tidak ditemukan!`
                })
            }
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async delete(req, res) {
        try {
            const id = +req.params.id;
            let result = await rekening.destroy({
                where: { id }
            })
            result === 1 ?
                res.status(200).json({
                    message: `Data Rekening dengan ID: ${id} berhasil di hapus!`
                }) :
                res.status(404).json({
                    message: `Data Rekening dengan ID: ${id} tidak ditemukan!`
                })
        } catch (error) {
            res.status(500).json(error);
        }
    }
}

module.exports = Rekening;