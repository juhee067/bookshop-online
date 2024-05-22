require('dotenv').config();

const env = process.env;

module.exports = {
  development: {
    username: env.DB_USER,
    password: env.DB_PASSWORD,
    database: env.DB_NAME,
    host: env.DB_HOST,
    dialect: 'mysql',
    timezone: 'Asia/Seoul',
  },
  test: {
    username: env.DB_USER,
    password: null,
    database: 'database_test',
    host: env.DB_HOST,
    dialect: 'mysql',
    timezone: 'Asia/Seoul',
  },
  production: {
    username: env.DB_USER,
    password: null,
    database: 'database_production',
    host: env.DB_HOST,
    dialect: 'mysql',
    timezone: 'Asia/Seoul',
  },
};
