const db =  require('../config/sequelize');
const { Sequelize, DataTypes } = require('sequelize');

const Jadwal = db.define('eduwork', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false
  },
  week: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  jadwal: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  freezeTableName: true
});

module.exports = Jadwal;