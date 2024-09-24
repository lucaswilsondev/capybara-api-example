const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('capivasdb', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports - sequelize; 