require("dotenv").config();
const { _setRandomNumber } = require("../data");

const { Client, RaisonSociale } = require("../../services/sequelize");

const clients = [];
let contrat = 1000;

const societes = [
  {
    raisonSociale: "funk society",
  },
  {
    raisonSociale: "toto company",
  },
];

async function createRaisonSociale() {
  await RaisonSociale.bulkCreate(societes);
}

async function createClients() {
  for (let i = 0; i < 50; i++) {
    const client = {
      nom: `Entreprise n° ${i + 1}`,
      email: `contact_${i + 1}@entreprise.com`,
      contrat: contrat++,
      telephone: i + 1 < 10 ? `00${i + 1}` : `0${i + 1}`,
      adresse: `${i + 1} rue Xavier Pinson`,
      codePostal: "64000",
      ville: "San Francisco sur Adour",
      raisonSocialeId: _setRandomNumber(1, 2),
    };
    console.log(client.nom);
    clients.push(client);
  }
}

async function saveClients() {
  const newSocietes = await createRaisonSociale();
  const newClients = await Client.bulkCreate(clients);
}

async function createClientsFixtures() {
  await createClients();
  await saveClients();
}

//createClientsFixtures();

module.exports = { createClientsFixtures };
