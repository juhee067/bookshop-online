'use strict';

module.exports = (sequelize, DataTypes) => {
  const Like = sequelize.define(
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
  return Like;
};
