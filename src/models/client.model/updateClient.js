const { Client } = require("../../services/sequelize");

async function updateClient(clientId, client) {
  const updatedClient = await Client.update(client, {
    where: { id: clientId },
  });
  if (updatedClient) {
    return updateClient;
  }
  return false;
}

module.exports = updateClient;
