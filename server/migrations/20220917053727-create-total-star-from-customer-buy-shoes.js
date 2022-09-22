'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('total_star_from_customer_buy_shoes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER
      },
      kode_product: {
        type: Sequelize.STRING
      },
      star: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('total_star_from_customer_buy_shoes');
  }
};