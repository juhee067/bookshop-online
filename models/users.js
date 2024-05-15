'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.createTable(
      'Users',
      {
        id: {
          type: Sequelize.INTEGER(11),
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        username: { type: Sequelize.STRING(35), allowNull: false },
        email: { type: Sequelize.STRING(50), allowNull: false },
        password: {
          type: Sequelize.STRING(20),
          allowNull: false,
        },
        address: Sequelize.STRING(50),
        contact: Sequelize.STRING(50),
      },
      {
        timestamps: false,
      }
    );
  },

  async down(queryInterface, Sequelize) {
    queryInterface.dropTable('Users');
  },
};
