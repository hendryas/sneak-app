'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('customer_payment_recaps', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER
      },
      no_order: {
        type: Sequelize.STRING
      },
      date_order: {
        type: Sequelize.DATE
      },
      recipient_address_id: {
        type: Sequelize.INTEGER
      },
      expedition: {
        type: Sequelize.STRING
      },
      package: {
        type: Sequelize.STRING
      },
      estimation: {
        type: Sequelize.STRING
      },
      shipping: {
        type: Sequelize.INTEGER
      },
      grand_total: {
        type: Sequelize.INTEGER
      },
      total_pay: {
        type: Sequelize.INTEGER
      },
      payment_status_id: {
        type: Sequelize.INTEGER
      },
      proof_of_payment: {
        type: Sequelize.STRING
      },
      status_order: {
        type: Sequelize.INTEGER
      },
      no_resi: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('customer_payment_recaps');
  }
};