const { product } = require('../../models');
var randomstring = require("randomstring");

class ProductController {
    static async getDataProduct(req, res) {
        try {
            let result = await product.findAll();
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async create(req, res) {
        try {
            const kode_product = randomstring.generate(12).toUpperCase();
            let image = req.file.path;
            const { name, description, brand_id, category_id, start_price, discount_price, final_price, size, stock } = req.body;

            var discount_decimal = discount_price / 100;
            var total = discount_decimal * start_price;

            // console.log(req.file);
            console.log(kode_product);

            if (!req.file) {
                res.status(500).json({
                    message: `Silahkan Upload File Gambar!`
                });
            }

            // let result = await product.create({
            //     role_name
            // })
            // res.status(201).json(name);
        } catch (error) {
            res.status(500).json();
        }
    }
}

module.exports = ProductController;