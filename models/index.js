'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const env = process.env.NODE_ENV || 'development';

const config = require('../config/config')[env];

const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.User = require('./User.js')(sequelize, DataTypes);
db.Book = require('./Book.js')(sequelize, DataTypes);
db.Category = require('./Category.js')(sequelize, DataTypes);
db.likes = require('./Like.js')(sequelize, DataTypes);

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;

module.exports = db;
