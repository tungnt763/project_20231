'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('bookings', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            phoneNumber: {
                type: Sequelize.STRING
            },
            typeOfRoom: {
                type: Sequelize.INTEGER
            },
            dateBooking: {
                type: Sequelize.STRING
            },
            startTime: {
                type: Sequelize.INTEGER
            },
            endTime: {
                type: Sequelize.INTEGER
            },
            address: {
                type: Sequelize.STRING
            },
            totalPrice: {
                type: Sequelize.INTEGER
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('bookings');
    }
};