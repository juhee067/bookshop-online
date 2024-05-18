'use strict';

module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define(
    'Book',
    {
      bookId: {
        type: DataTypes.INTEGER(11),
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
      img: {
        type: DataTypes.STRING(45),
      },
      category_id: {
        type: DataTypes.INTEGER(11),
      },
      form: {
        type: DataTypes.STRING(45),
      },
      isbn: {
        type: DataTypes.STRING(45),
      },
      summary: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      detail: {
        type: DataTypes.LONGTEXT,
        allowNull: false,
      },
      author: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
      pages: {
        type: DataTypes.INTEGER(11),
      },
      contents: {
        type: DataTypes.LONGTEXT,
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
      },
      pubDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
  return Book;
};
