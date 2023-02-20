const { Ticket } = require("../../services/sequelize");

async function createTicket(data) {
  Object.assign(data, { ref: await _getLastTicketRef() });
  const newTicket = await Ticket.create(data);
  if (!newTicket) {
    return false;
  }
  return newTicket;
}

async function _getLastTicketRef() {
  const tickets = await Ticket.findAll({ order: [["id", "DESC"]] });
  return parseInt(tickets[0].ref) + 1 || 1000;
}

module.exports = createTicket;
