'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class total_star_from_customer_buy_shoes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  total_star_from_customer_buy_shoes.init({
    user_id: DataTypes.INTEGER,
    kode_product: DataTypes.STRING,
    star: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'total_star_from_customer_buy_shoes',
  });
  return total_star_from_customer_buy_shoes;
};