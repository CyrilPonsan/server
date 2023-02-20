require("dotenv").config();
const bcrypt = require("bcrypt");

const { User } = require("../../services/sequelize");

// créér un utilisateur avec le role 'tech' :
// node src/utils/scripts/createUser.js 'email@exemple.fr' 'password'
// pour créer un admin :
// node src/utils/scripts/createUser.js 'email@exemple.fr' 'password' 'admin'
async function createUser() {
  const roles = ["tech"];
  if (process.argv[4] === "admin") {
    roles.push(process.argv[4]);
  }
  const hash = await bcrypt.hash(process.argv[3], 10);
  const user = await User.create({
    username: process.argv[2],
    password: hash,
    roles: roles,
    nom: "jean",
    prenom: "dupont",
  });
  console.log("user added", user);
}

createUser();
