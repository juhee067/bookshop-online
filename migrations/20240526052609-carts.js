'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Carts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      book_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Books',
          key: 'book_id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      count: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'user_id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('Carts');
  },
};
