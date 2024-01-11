'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Room_Branch extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Room_Branch.init({
        //uuid random chuoi n ki tu 
        typeOfRoom: DataTypes.INTEGER,
        address: DataTypes.STRING,
        numberOfRoom: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: 'Room_Branch',
    });
    return Room_Branch;
};