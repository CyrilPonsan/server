const {
  Client,
  Intervention,
  Statut,
  TypeMateriel,
  Materiel,
} = require("../../services/sequelize");

async function getClientTickets(clientId) {
  const client = await Client.findByPk(clientId);
  if (client) {
    const tickets = await client.getTicket({
      include: [
        {
          model: Intervention,
          as: "intervention",
          attributes: ["id", "date"],
          include: [{ model: Statut, as: "statut", attributes: ["label"] }],
        },
        {
          model: Materiel,
          as: "materiel",
          attributes: ["ref"],
          include: [
            { model: TypeMateriel, as: "typeMateriel", attributes: ["type"] },
          ],
        },
      ],
      attributes: ["id", "titre", "ref", "resume"],
      order: [
        ["id", "DESC"],
        [{ model: Intervention, as: "intervention" }, "date", "DESC"],
      ],
    });
    if (tickets.length !== 0) {
      return tickets;
    }
  }
  return false;
}

module.exports = getClientTickets;
