'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const env = process.env.NODE_ENV || 'development';

const config = require('../config/config')[env];

const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);
db.users = require('./User.js')(sequelize, DataTypes);
db.books = require('./Book.js')(sequelize, DataTypes);
db.category = require('./Category.js')(sequelize, DataTypes);
db.likes = require('./Like.js')(sequelize, DataTypes);

db.sequelize = sequelize;

module.exports = db;
