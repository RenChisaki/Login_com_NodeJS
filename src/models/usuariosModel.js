const connection  = require("../Connection/conexaoBD");
const sequelize = require('sequelize');

const usuarios = connection.define('usuarios', {
    id_usuario: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    email: {
        type: sequelize.STRING,
        allowNull: false
    },
    password: {
        type: sequelize.STRING,
        allowNull: false
    }
},{
    tableName: "usuario",
    timestamps: false
})

module.exports = usuarios;






