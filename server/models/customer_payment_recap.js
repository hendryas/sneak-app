'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class customer_payment_recap extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  customer_payment_recap.init({
    user_id: DataTypes.INTEGER,
    no_order: DataTypes.STRING,
    date_order: DataTypes.DATE,
    recipient_address_id: DataTypes.INTEGER,
    expedition: DataTypes.STRING,
    package: DataTypes.STRING,
    estimation: DataTypes.STRING,
    shipping: DataTypes.INTEGER,
    grand_total: DataTypes.INTEGER,
    total_pay: DataTypes.INTEGER,
    payment_status_id: DataTypes.INTEGER,
    proof_of_payment: DataTypes.STRING,
    status_order: DataTypes.INTEGER,
    no_resi: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'customer_payment_recap',
  });
  return customer_payment_recap;
};