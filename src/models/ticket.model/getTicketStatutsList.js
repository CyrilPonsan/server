const { Statut } = require("../../services/sequelize");

async function getTicketsStatutsList() {
  return await Statut.findAll();
}

module.exports = { getTicketsStatutsList };
