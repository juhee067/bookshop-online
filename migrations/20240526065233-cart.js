'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // createdAt과 updatedAt 컬럼 삭제
    await queryInterface.removeColumn('Carts', 'createdAt');
    await queryInterface.removeColumn('Carts', 'updatedAt');

    // user_id, count, book_id 컬럼에 not null 제약 추가
    await queryInterface.changeColumn('Carts', 'user_id', {
      type: Sequelize.INTEGER,
      allowNull: false,
    });

    await queryInterface.changeColumn('Carts', 'count', {
      type: Sequelize.INTEGER,
      allowNull: false,
    });

    await queryInterface.changeColumn('Carts', 'book_id', {
      type: Sequelize.INTEGER,
      allowNull: false,
    });
  },

  down: async (queryInterface, Sequelize) => {
    // user_id, count, book_id 컬럼의 not null 제약 제거
    await queryInterface.changeColumn('Carts', 'user_id', {
      type: Sequelize.INTEGER,
      allowNull: true,
    });

    await queryInterface.changeColumn('Carts', 'count', {
      type: Sequelize.INTEGER,
      allowNull: true,
    });

    await queryInterface.changeColumn('Carts', 'book_id', {
      type: Sequelize.INTEGER,
      allowNull: true,
    });
  },
};
