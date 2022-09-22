const { recipient_address } = require('../../models');

class RecipientAddress {
    static async getDataRecipientAddress(req, res) {
        try {
            let result = await recipient_address.findAll();
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async getDataRecipientAddressByUserId(req, res) {
        try {
            const { user_id } = req.body;
            console.log(user_id);
            let result = await recipient_address.findOne({
                where: { user_id }
            })
            if (result == 1) {
                res.status(200).json(result);
            } else {
                res.status(404).json({
                    message: `Data Alamat Penerima dengan USER ID: ${user_id} tidak ditemukan!`
                })
            }

        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async create(req, res) {
        try {
            const { user_id, address, name, no_phone, street_name, pinpoint, postal_code, additional_details } = req.body;
            let result = await recipient_address.create({
                user_id, address, name, no_phone, street_name, pinpoint, postal_code, additional_details
            })
            res.status(201).json(result);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async update(req, res) {
        try {
            const id = +req.params.id;
            const { user_id, address, name, no_phone, street_name, pinpoint, postal_code, additional_details } = req.body;
            let result = await recipient_address.update({
                user_id, address, name, no_phone, street_name, pinpoint, postal_code, additional_details
            }, {
                where: { id }
            })
            if (result == 1) {
                res.status(201).json({
                    message: `Data Alamat Penerima dengan ID: ${id} berhasil di Update!`
                });
            } else {
                res.status(404).json({
                    message: `Data Alamat Penerima dengan ID: ${id} tidak ditemukan!`
                })
            }
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async delete(req, res) {
        try {
            const id = +req.params.id;
            let result = await recipient_address.destroy({
                where: { id }
            })
            result === 1 ?
                res.status(200).json({
                    message: `Data Alamat Penerima dengan ID: ${id} berhasil di hapus!`
                }) :
                res.status(404).json({
                    message: `Data Alamat Penerima dengan ID: ${id} tidak ditemukan!`
                })
        } catch (error) {
            res.status(500).json(error);
        }
    }
}

module.exports = RecipientAddress;