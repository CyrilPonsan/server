const { Client, RaisonSociale } = require("../../services/sequelize");

async function getAllClients(offset, limit) {
  const clients = await Client.findAll({
    include: [
      {
        model: RaisonSociale,
        as: "raisonSociale",
        //attributes: ["id", "raisonSociale"],
      },
    ],
    //attributes: ["nom"],
    order: [
      [{ model: RaisonSociale, as: "raisonSociale" }, "raisonSociale", "ASC"],
      ["nom", "ASC"],
    ],
    offset: offset,
    limit: limit,
    subQuery: false,
  });

  if (clients.length === 0) {
    return false;
  }

  return clients;
}

async function getTotalClients() {
  return await Client.count();
}

module.exports = { getAllClients, getTotalClients };
