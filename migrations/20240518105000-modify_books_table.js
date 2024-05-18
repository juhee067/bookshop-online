'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Books', {
      bookId: {
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
