const { User } = require("../models");

const userData = [
  {
    username: "Johnny",
    password: "john",
  },
  {
    username: "Jakey",
    password: "jake",
  },
  {
    username: "Joel",
    password: "joe",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
