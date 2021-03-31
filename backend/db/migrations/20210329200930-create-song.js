'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Songs', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                allowNull: false,
                type: Sequelize.STRING
            },
            artistId: {
                allowNull: false,
                references: { model: 'Artists' },
                type: Sequelize.INTEGER
            },
            albumId: {
                allowNull: false,
                references: { model: 'Albums' },
                type: Sequelize.INTEGER
            },
            url: {
                allowNull: false,
                type: Sequelize.STRING
            },
            length: {
                allowNull: false,
                type: Sequelize.NUMERIC
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.fn('now')
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.fn('now')
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Songs');
    }
};
