'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class recipient_address extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  recipient_address.init({
    user_id: DataTypes.INTEGER,
    address: DataTypes.STRING,
    name: DataTypes.STRING,
    no_phone: DataTypes.INTEGER,
    street_name: DataTypes.STRING,
    pinpoint: DataTypes.STRING,
    postal_code: DataTypes.INTEGER,
    additional_details: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'recipient_address',
  });
  return recipient_address;
};