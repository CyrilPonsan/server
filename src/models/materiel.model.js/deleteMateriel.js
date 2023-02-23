const { Materiel } = require("../../services/sequelize");

async function deleteMateriel(ref) {
  const materielToDelete = await Materiel.destroy({ where: { ref: ref } });
  if (materielToDelete) {
    return materielToDelete;
  }
  return false;
}

module.exports = deleteMateriel;
