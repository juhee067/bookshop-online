'use strict';

module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(
    'User',
    {
      userId: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      username: { type: DataTypes.STRING(35), allowNull: false },
      email: { type: DataTypes.STRING(50), allowNull: false },
      password: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      address: DataTypes.STRING(50),
      contact: DataTypes.STRING(50),
      salt: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: false,
    }
  );
  return user;
};
