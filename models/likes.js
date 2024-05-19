'use strict';

module.exports = (sequelize, DataTypes) => {
  const like = sequelize.define(
    'Like',
    {
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      liked_book_id: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
  return like;
};
