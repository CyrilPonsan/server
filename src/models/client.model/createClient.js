const { Client } = require("../../services/sequelize");

async function createClient(clientToAdd) {
  clientToAdd = { ...clientToAdd, contrat: _getLastContrat() };
  const newClient = await Client.create(clientToAdd);
  if (newClient) {
    return newClient;
  }
  return false;
}

async function _getLastContrat() {
  const clients = await Client.findAll({ order: [["contrat", "DESC"]] });
  console.log(parseInt(clients[0].contrat) + 1);
  return 100000;
}

module.exports = createClient;
