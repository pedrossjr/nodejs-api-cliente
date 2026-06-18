const { DataTypes } = require('sequelize');

const sequelize =
require('../config/database');

const Cliente = sequelize.define(
    'Cliente',
    {
        codigo: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },

        nome: {
            type: DataTypes.STRING(150),
            allowNull: false
        },

        telefone: {
            type: DataTypes.STRING(20),
            allowNull: false
        },

        email: {
            type: DataTypes.STRING(150),
            allowNull: false,
            unique: true
        }
    },
    {
        tableName: 'clientes'
    }
);

module.exports = Cliente;