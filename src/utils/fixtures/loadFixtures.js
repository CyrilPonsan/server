require("dotenv").config();
const bcrypt = require("bcrypt");
const { Conseiller } = require("../../services/sequelize");
const { createClientsFixtures } = require("./clients.fixtures");
const { createTickets } = require("./createTickets");
const { createMaterielFixtures } = require("./materiel.fixtures");
const { createStatutsFixtures } = require("./statuts.fixtures");

async function createUsers() {
  const hash = await bcrypt.hash("Abcd@1234", 10);
  const users = [];
  users.push({
    username: "tech@atelier.eco",
    password: hash,
    roles: ["tech"],
    nom: "dupont",
    prenom: "bob",
  });
  users.push({
    username: "admin@atelier.eco",
    password: hash,
    roles: ["tech", "admin"],
    nom: "francisco",
    prenom: "sam",
  });
  await Conseiller.bulkCreate(users);
}

async function loadfixtures() {
  await createUsers();
  await createStatutsFixtures();
  await createClientsFixtures();
  await createMaterielFixtures();
  await createTickets();
}

loadfixtures();

console.log("Fixtures chargées !");
