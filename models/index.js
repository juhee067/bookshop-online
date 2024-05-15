'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const env = process.env.NODE_ENV || 'development';

const config = require('../config/config')[env];

const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);
db.users = require('./Users.js')(sequelize, DataTypes);

db.sequelize = sequelize;

module.exports = db;
