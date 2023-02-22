const { RaisonSociale } = require("../../services/sequelize");

async function getRaisonsSociales() {
  return await RaisonSociale.findAll();
}

async function addRaisonSociale(raisonSociale) {
  const newRaisonSociale = await RaisonSociale.create(raisonSociale);
  if (newRaisonSociale) {
    return newRaisonSociale;
  }
  return false;
}

module.exports = { getRaisonsSociales, addRaisonSociale };
