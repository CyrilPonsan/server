const { Op } = require("sequelize");
const { RaisonSociale, Client } = require("../../services/sequelize");

async function getClientByContrat(contrat) {
  const clients = await Client.findAll({
    where: { contrat: contrat },
    include: [{ model: RaisonSociale, as: "raisonSociale" }],
  });
  if (clients.length === 0) {
    return false;
  }
  return clients;
}

async function getClientByNom(nom) {
  const clients = await Client.findAll({
    where: { nom: { [Op.like]: `%${nom}%` } },
    include: [{ model: RaisonSociale, as: "raisonSociale" }],
  });
  if (clients.length === 0) {
    return false;
  }
  return clients;
}

module.exports = { getClientByContrat, getClientByNom };
