const sequelize = require("../config/connection.js");
const { Kitty } = require("../models");

const kittyData = [
    {
        userId: 1,
        kittyName: "Henry",
        kittyStory: "This cat thinks he is a king. He is very loving, spoiled and playful.",
        kittyGender: "Male",
        kittyWeight: "Average",
        kittyColor: "White",
        kittyAge: 3,
        kittyPets: "No",
    },
    {
        userId: 1,
        kittyName: "Felix",
        kittyStory: "Felix is a shy guy looking for a new home, he is good with kids and other animals.",
        kittyPicture: "/images/american-curl.svg",
        kittyBreed: "American Curl",
        kittyGender: "Male",
        kittyWeight: "Underweight",
        kittyColor: "Black",
        kittyLocation: "Chicago",
        kittyPersonality: "Shy",
        kittyAge: 6,
        kittyKids: "Yes",
        kittyPets: "Yes",
    },
    {
        userId: 1,
        kittyName: "Wesker",
        kittyStory: "I am posting up wesker for adoption because he is eating me out of house and home. I cannot afford him any longer.",
        kittyPicture: "/images/japanese-bobtail.svg",
        kittyBreed: "Japanese Bobtail",
        kittyGender: "Male",
        kittyWeight: "Chonky",
        kittyColor: "Orange",
        kittyLocation: "New York",
        kittyPersonality: "Chill",
        kittyAge: 7,
        kittyKids: "No",
        kittyPets: "Yes",
    },
    {
        userId: 1,
        kittyName: "Beerus",
        kittyStory: "Beerus is a very friendly and relaxed cat. Gets along great with other animals.",
        kittyPicture: "/images/sphynx.svg",
        kittyBreed: "Sphynx",
        kittyGender: "Male",
        kittyWeight: "Average",
        kittyColor: "White",
        kittyLocation: "Los Angeles",
        kittyPersonality: "Chill",
        kittyAge: 5,
        kittyKids: "No",
        kittyPets: "Yes",
    },
    {
        userId: 1,
        kittyName: "Furball",
        kittyStory: "Unfortunately, Furball's last home did not work out. Looking for a loving cat family to adopt her.",
        kittyPicture: "/images/devon-rex.svg",
        kittyBreed: "Devon Rex",
        kittyGender: "Female",
        kittyWeight: "Slim & Trim",
        kittyColor: "Silver",
        kittyLocation: "San Francisco",
        kittyPersonality: "Playful",
        kittyAge: 9,
        kittyKids: "No",
        kittyPets: "Yes",
    }
]

const seedKitty = () => Kitty.bulkCreate(kittyData);

module.exports = seedKitty;
