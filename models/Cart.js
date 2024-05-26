'use strict';

module.exports = (sequelize, DataTypes) => {
  const Cart = sequelize.define(
    'Cart',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      book_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      count: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: 'Carts',
      timestamps: false,
    }
  );

  Cart.associate = (model) => {
    Cart.belongsTo(model.User, {
      foreignKey: 'user_id',
    });
    Cart.belongsTo(model.Book, {
      foreignKey: 'book_id',
    });
  };

  return Cart;
};
