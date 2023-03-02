const { TypeMateriel, Marque } = require("../../services/sequelize");

async function getClientMateriels(clientId) {
  const materiels = await materiels.findAll({
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
