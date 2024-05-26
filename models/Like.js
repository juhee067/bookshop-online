'use strict';

module.exports = (sequelize, DataTypes) => {
  const Like = sequelize.define(
    'Like',
    {
      id: {
        type: DataTypes.INTEGER(11),
        primaryKey: true,
        allowNull: false,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      liked_book_id: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { tableName: 'Likes', timestamps: false }
  );

  Like.associate = (models) => {
    Like.belongsTo(models.Book, {
      foreignKey: 'liked_book_id',
      as: 'book',
    });
  };

  return Like;
};
