const {
  TypeMateriel,
  Marque,
  Materiel,
  Modele,
} = require("../../services/sequelize");

async function getClientMateriels(clientId) {
  const materiels = await Materiel.findAll({
    where: { clientId: clientId },
    include: [
      { model: TypeMateriel, as: "typeMateriel" },
      { model: Marque, as: "marque" },
      { model: Modele, as: "modele" },
    ],
  });
  if (materiels.length !== 0) {
    return materiels;
  }
  return false;
}

module.exports = getClientMateriels;
