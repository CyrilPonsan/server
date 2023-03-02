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
      { model: TypeMateriel, as: "typeMateriel", attributes: ["type"] },
      { model: Marque, as: "marque", attributes: ["marque"] },
      { model: Modele, as: "modele", attributes: ["modele", "url"] },
    ],
    attributes: ["id", "ref", "miseEnService"],
  });
  if (materiels.length !== 0) {
    return materiels;
  }
  return false;
}

module.exports = getClientMateriels;
