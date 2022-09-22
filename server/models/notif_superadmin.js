'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class notif_superadmin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  notif_superadmin.init({
    email: DataTypes.STRING,
    no_order: DataTypes.STRING,
    content_notification: DataTypes.STRING,
    status_notification: DataTypes.INTEGER,
    payment_status_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'notif_superadmin',
  });
  return notif_superadmin;
};