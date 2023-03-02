const {
  Client,
  TypeMateriel,
  Modele,
  Marque,
} = require("../../services/sequelize");

async function getClientMateriels(clientId) {
  const client = await Client.findByPk(clientId);
  if (client) {
    const materiels = await client.getMateriel({
      include: [
        { model: TypeMateriel, as: "typeMateriel", attributes: ["type"] },
        { model: Marque, as: "marque", attributes: ["marque"] },
        { model: Modele, as: "modele", attributes: ["modele"] },
      ],
    });
    if (materiels.length !== 0) {
      return materiels;
    }
  }
  return false;
}

module.exports = getClientMateriels;
