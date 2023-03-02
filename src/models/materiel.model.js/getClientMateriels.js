const {
  TypeMateriel,
  Marque,
  Materiel,
  Modele,
} = require("../../services/sequelize");

async function getClientMateriels(clientId, offset, limite) {
  console.log(offset, limite);
  const materiels = await Materiel.findAll({
    where: { clientId: clientId },
    include: [
      { model: TypeMateriel, as: "typeMateriel", attributes: ["type"] },
      { model: Marque, as: "marque", attributes: ["marque"] },
      { model: Modele, as: "modele", attributes: ["modele", "url"] },
    ],
    attributes: ["id", "ref", "miseEnService"],
    // order: ["miseEnService", "DESC"],
    offset: offset,
    limit: limite,
    subQuery: false,
  });
  if (materiels.length !== 0) {
    return materiels;
  }
  return false;
}

module.exports = getClientMateriels;
