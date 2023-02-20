const express = require("express");
const { hasAccess } = require("../middlewares/auth.middleware");
const {
  httpGetTickets,
  httpGetTicketDetails,
  httpGetTicketStatutsList,
  httpCreateIntervention,
  httpCreateTicket,
  httpGetClientTickets,
} = require("../controllers/tickets.controller");

const ticketsRouter = express.Router();

ticketsRouter.get("/", httpGetTickets);
ticketsRouter.get("/details/:ref", httpGetTicketDetails);
ticketsRouter.get("/statuts", httpGetTicketStatutsList);
ticketsRouter.post("/new-intervention", httpCreateIntervention);
ticketsRouter.post("/new-ticket", httpCreateTicket);

module.exports = ticketsRouter;
