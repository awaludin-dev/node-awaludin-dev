const { Sequelize } = require("sequelize");

const db = new Sequelize({
    database: 'jadwal',
    host: 'localhost',
    username: 'root',
    password: 'aldiangel27',
    dialect: 'mysql'
});

module.exports = db;