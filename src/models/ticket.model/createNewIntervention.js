const { Intervention, Statut } = require("../../services/sequelize");

async function createNewIntervention(userId, intervention) {
  const statut = await Statut.findOne({
    where: { code: intervention.statut },
    attributes: ["id"],
  });

  intervention = Object.assign(intervention, {
    date: new Date(),
    conseiller_id: userId,
    statut_id: statut.id,
  });
  const newIntervention = await Intervention.create(intervention);
  if (!newIntervention) {
    return false;
  }
  return newIntervention;
}

module.exports = { createNewIntervention };
