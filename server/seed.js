const { db, Puppies, Owner } = require("./db/database");
const app = require("../server/index");
const port = process.env.PORT || 3000;

const puppies = [
  {
    name: "Opi",
    age: 3,
    description: "Hi, I am Opi.",
  },
  {
    name: "Cosmo",
    age: 6,
    description: "Hi, I am Cosmo.",
  },
];

const owner = [
  {
    name: "Nancy",
    description: "My name is Nancy.",
  },
  {
    name: "Maggie",
    description: "My name is Maggie.",
  },
];

db.sync() // sync our database
  .then(function () {
    app.listen(port); // then start listening with our express server once we have synced
  });
