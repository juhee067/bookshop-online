'use strict';

const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';

// config 파일에 있는 설정값들을 불러온다.
// config 객체의 env변수 키 의 객체 값들을 불러온다.
// 즉 데이터베이스 설정을 불러오는 것
const config = require('../config/config')[env];
const db = {};

// new Sequelize를 통해 MySQL연결 객체를 생성
const sequelize = new Sequelize(config.database, config.username, config.password, config);

// 연결객체를 나중에 재사용하기 위해 db.sequelize에 넣어둔다.
db.sequelize = sequelize;

module.exports = db;
