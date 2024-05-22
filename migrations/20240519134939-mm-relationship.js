'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Books', {
      book_id: {
        type: Sequelize.INTEGER(11),
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      title: {
        type: Sequelize.STRING(45),
        allowNull: false,
      },
      img: {
        type: Sequelize.STRING(45),
      },
      category_id: {
        type: Sequelize.INTEGER(11),
        allowNull: true, // 카테고리가 선택적이라면 true로 변경
        references: {
          model: 'Categories',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE', // 적절한 삭제 옵션을 선택하세요
      },
      form: {
        type: Sequelize.STRING(45),
      },
      isbn: {
        type: Sequelize.STRING(45),
      },
      summary: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      detail: {
        type: Sequelize.TEXT('long'),
        allowNull: false,
      },
      author: {
        type: Sequelize.STRING(45),
        allowNull: false,
      },
      pages: {
        type: Sequelize.INTEGER(11),
      },
      contents: {
        type: Sequelize.TEXT('long'),
        allowNull: false,
      },
      price: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
      },
      pub_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Books');
  },
};
