'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Booking extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Booking.init({
        //uuid random chuoi n ki tu 
        phoneNumber: DataTypes.STRING,
        typeOfRoom: DataTypes.INTEGER,
        dateBooking: DataTypes.STRING,
        startTime: DataTypes.INTEGER,
        endTime: DataTypes.INTEGER,
        address: DataTypes.STRING,
        totalPrice: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: 'Booking',
    });
    return Booking;
};