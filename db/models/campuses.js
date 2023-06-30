const {DataTypes} = require("sequelize");
const db = require("../db");

const campuses = db.define("campuses",{
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    imageUrl: {
        type: DataTypes.STRING,
        defaultValue:"No Imgage"
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT
    }
});

module.exports = campuses;