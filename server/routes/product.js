const productRoute = require('express').Router();
const { ProductController } = require('../controllers/api');
const multer = require('multer');
const { product, image_shoes, size_shoes } = require('../models')
var randomstring = require("randomstring");

// Setup Image
const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images/product');
    },
    filename: (req, file, cb) => {
        cb(null, new Date().getTime() + '-' + file.originalname); // Format penamaan image / file
    }
})

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg') {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

const upload = multer({ storage: fileStorage, fileFilter: fileFilter }).array('images');

// app.use(multer({ storage: fileStorage, fileFilter: fileFilter })).single('image');


productRoute.get('/', ProductController.getDataProduct);
// productRoute.post('/create', upload, ProductController.create);
productRoute.post('/create', upload, (req, res) => {
    const kode_product = randomstring.generate(12).toUpperCase();
    const images = req.files;
    const imagesArray = [];
    let { name, description, brand_id, category_id, start_price, discount_price, final_price, size, stock } = req.body;

    var discount_decimal = discount_price / 100;
    final_price = discount_decimal * start_price;

    // Create Shoes
    let resultProduct = product.create({
        kode_product, name, description, brand_id, category_id, start_price, discount_price, final_price
    })

    // Create Image Shoes
    if (Array.isArray(images) && images.length > 0) {
        images.forEach(file => {
            imagesArray.push(file.path)
        })
        // console.log(imagesArray)

        var dataImageShoes = imagesArray.map(imageShoes => {
            return { kode_product: kode_product, image: imageShoes }
        })
        // console.log(data)
        let resultImageProduct = image_shoes.bulkCreate(dataImageShoes)
    }

    // Create Size and Stock Shoes
    let index = 0;
    var dataSizeAndStock = size.map(size => {
        return { kode_product: kode_product, size: size, stock: stock[index++] }

    })
    // console.log(dataSizeAndStock)
    let resultSizeAndStockProduct = size_shoes.bulkCreate(dataSizeAndStock)
        .then(result => {
            res.status(201).json({
                message: `Data Product Berhasil di Tambahkan!`,
                result
            })
        })
        .catch(err => {
            res.status(500).json(err);
        })
})

module.exports = productRoute;