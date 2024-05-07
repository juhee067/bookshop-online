const path = require('path');

module.exports = {
  config: require(path.join(__dirname, 'config', 'config.js')),
  models: path.join(__dirname, 'db', 'models'),
  seeders: path.join(__dirname, 'db', 'seeders'),
  migrations: path.join(__dirname, 'db', 'migrations'),
};
