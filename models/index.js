const User = require("./User.js");
const Kitty = require("./Kitty.js");
const UserKitty = require('./UserKitty');

// User - Kitty / User relations
User.hasMany(Kitty, {
    foreignKey: "userId",
    as: "kitty_owner",
    onDelete: "CASCADE",
});

Kitty.belongsTo(User, {
    foreignKey: "userId",
    as: "kitty_owner",
});


User.belongsToMany(Kitty, {
    through: UserKitty,
    as: 'favoriteKitties',
    foreignKey: "userId"
});

Kitty.belongsToMany(User, {
    through: UserKitty,
    foreignKey: "kittyId"
});

module.exports = { User, Kitty, UserKitty };
