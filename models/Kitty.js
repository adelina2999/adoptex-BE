const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");

class Kitty extends Model { };

Kitty.init(
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
    kittyPicture: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: "N/A"
    },
    kittyName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    kittyGender: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: "N/A"
    },
    kittyWeight: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: "N/A"
    },
    kittyColor: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: "N/A"
    },
    kittyAge: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    kittyPets: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "N/A"
    }
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: "kitty"
  }
);

module.exports = Kitty;
