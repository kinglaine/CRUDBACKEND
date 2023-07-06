const {DataTypes} = require("sequelize");
const db = require("../db");

const Students = db.define("students", {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        primaryKey: true,
        validate: {
            isEmail: true
        }
    },
    imageUrl: {
        type: DataTypes.STRING,
        defaultValue: "No Image"
    },
    gpa: {
        type: DataTypes.DECIMAL(4, 1),
        allowNull: false,
        validate: {
            min: 0.0,
            max: 4.0
        }
    }
});

module.exports = Students;