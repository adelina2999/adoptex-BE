const sequelize = require("../config/connection.js");
const seedUsers = require("./userData.js");
const seedKitty = require("./kittyData.js");

const seedAll = async () => {
    await sequelize.sync({ force: true });
    await seedUsers();
    await seedKitty();
    process.exit(0);
};

seedAll();
