const {
  Materiel,
  Marque,
  TypeMateriel,
  Modele,
} = require("../../services/sequelize");

async function getOneMateriel(ref) {
  const materiel = await Materiel.findOne({
    where: { ref: ref },
    include: [
      { model: TypeMateriel, as: "typeMateriel" },
      { model: Marque, as: "marque" },
      { model: Modele, as: "modele" },
    ],
  });
  if (materiel) {
    return materiel;
  }
  return false;
}

module.exports = getOneMateriel;
