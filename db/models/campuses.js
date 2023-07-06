const {DataTypes} = require("sequelize");
const db = require("../db");

const Campuses = db.define("campuses",{
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
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

module.exports = Campuses;