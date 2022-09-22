require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const bodyparser = require('body-parser');

// untuk menghindari Cross Origin di front end
const cors = require("cors");
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public')); // Menggunakan file css
app.use(express.static('public'));
app.use('/public/images/product', express.static('public/images/product'));
app.use('/public/images/user', express.static('public/images/user'));

//use express static folder
app.use(express.static("./public"));

// body-parser middleware use
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({
    extended: true
}))

const routes = require("./routes");
app.use(routes);

app.listen(port, () => {
    console.log(`App is listening on port: ${port}`);
});
