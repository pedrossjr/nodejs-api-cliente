'use strict';

module.exports = {

    async up(queryInterface, Sequelize) {

        await queryInterface.createTable(
            'clientes',
            {
                codigo: {
                    type: Sequelize.INTEGER,
                    primaryKey: true
                },

                nome: {
                    type: Sequelize.STRING(150),
                    allowNull: false
                },

                telefone: {
                    type: Sequelize.STRING(20),
                    allowNull: false
                },

                email: {
                    type: Sequelize.STRING(150),
                    unique: true,
                    allowNull: false
                },

                createdAt: {
                    type: Sequelize.DATE
                },

                updatedAt: {
                    type: Sequelize.DATE
                }
            }
        );
    },

    async down(queryInterface) {

        await queryInterface.dropTable(
            'clientes'
        );
    }
};