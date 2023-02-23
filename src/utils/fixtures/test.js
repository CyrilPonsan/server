require("dotenv").config();
const { Client } = require("../../services/sequelize");

async function test() {
  await Client.create({
    nom: "test",
    email: "toto@toto.test",
    contrat: "100000",
    telephone: "010203test",
    adresse: "2 rue du test",
    codePostal: "64000",
    ville: "San Francisco sur Adour",
    raisonSocialeId: 2,
  });
}

test();
