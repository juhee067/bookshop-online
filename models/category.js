'use strict';

module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define(
    'Category',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      category_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { tableName: 'Categories', timestamps: false }
  );
  // 카테고리 모델
  Category.associate = (models) => {
    Category.hasMany(models.Book, {
      foreignKey: 'category_id',
      as: 'Books',
    });
  };

  return Category;
};
