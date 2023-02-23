const { Materiel } = require("../../services/sequelize");

async function updateMateriel(materielToUpdate, materielId) {
  const updatedMateriel = await Materiel.update(materielToUpdate, {
    where: { id: materielId },
  });
  if (updatedMateriel) {
    return updatedMateriel;
  }
  return false;
}

module.exports = updateMateriel;
