const { status_payment } = require('../../models');

class StatusPaymentController {
    static async getDataStatusPayment(req, res) {
        try {
            let result = await status_payment.findAll();
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async create(req, res) {
        try {
            const { payment_status } = req.body;
            let result = await status_payment.create({
                payment_status
            })
            res.status(201).json(result);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async update(req, res) {
        try {
            const id = +req.params.id;
            const { payment_status } = req.body;
            let result = await status_payment.update({
                payment_status
            }, {
                where: { id }
            })
            if (result == 1) {
                res.status(201).json({
                    message: `Data Status Pembayaran dengan ID: ${id} berhasil di Update!`
                });
            } else {
                res.status(404).json({
                    message: `Data Status Pembayaran dengan ID: ${id} tidak ditemukan!`
                })
            }
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async delete(req, res) {
        try {
            const id = +req.params.id;
            let result = await status_payment.destroy({
                where: { id }
            })
            result === 1 ?
                res.status(200).json({
                    message: `Data Status Pembayaran dengan ID: ${id} berhasil di hapus!`
                }) :
                res.status(404).json({
                    message: `Data Status Pembayaran dengan ID: ${id} tidak ditemukan!`
                })
        } catch (error) {
            res.status(500).json(error);
        }
    }
}

module.exports = StatusPaymentController;