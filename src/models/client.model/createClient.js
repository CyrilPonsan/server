const { Client } = require("../../services/sequelize");

async function createClient(clientToAdd) {
  const newClient = await Client.create(clientToAdd);
  if (newClient) {
    return newClient;
  }
  return false;
}

module.exports = createClient;
