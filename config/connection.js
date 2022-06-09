const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;
/**
 *  process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
 */
sequelize = new Sequelize(
  'kitty_db',
  'root',
  '123456',
  {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  }
);


module.exports = sequelize;
