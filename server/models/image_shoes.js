'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class image_shoes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  image_shoes.init({
    kode_product: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'image_shoes',
  });
  return image_shoes;
};