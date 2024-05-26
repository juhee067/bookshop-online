'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn('Carts', 'user_id', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'user_id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });
    await queryInterface.changeColumn('Carts', 'book_id', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Books',
        key: 'book_id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });
  },

  async down(queryInterface) {
    await queryInterface.removeConstraint('Carts', 'Carts_user_id_fkey');
    await queryInterface.removeConstraint('Carts', 'Carts_book_id_fkey');
  },
};
