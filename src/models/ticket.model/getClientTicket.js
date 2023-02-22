const {
  Ticket,
  Materiel,
  Client,
  sequelize,
} = require("../../services/sequelize");

async function getClientTicket(clientId) {
  const tickets = await Ticket.findAll({
    include: [
      {
        model: Materiel,
        as: "materiel",
        where: { client_id: 7 },
      },
    ],
  });
  return tickets;
}

module.exports = getClientTicket;
