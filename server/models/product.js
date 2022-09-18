'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  product.init({
    kode_product: DataTypes.STRING,
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    brand_id: DataTypes.INTEGER,
    category_id: DataTypes.INTEGER,
    start_price: DataTypes.INTEGER,
    discount_price: DataTypes.INTEGER,
    final_price: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'product',
  });
  return product;
};