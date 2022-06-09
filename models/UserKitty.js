const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");

class UserKitty extends Model {};

UserKitty.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "user",
                key: "id"
            }
        },
        kittyId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
            references: {
                model: "kitty",
                key: "id"
            }

        }
      },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: "userKitty"
    }
);

module.exports = UserKitty;
