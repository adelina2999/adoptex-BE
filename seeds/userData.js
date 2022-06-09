const sequelize = require("../config/connection.js");
const { User } = require("../models");
const bcrypt = require("bcrypt");

const userData = [
    {
        email: "test@test.com",
        username: "Admin",
        password: "password"
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
