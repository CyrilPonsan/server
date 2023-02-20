const { Client } = require("../../services/sequelize");

async function deleteClient(clientId) {
  console.log(clientId);
  await Client.destroy({ where: { id: clientId } });
}

module.exports = deleteClient;
