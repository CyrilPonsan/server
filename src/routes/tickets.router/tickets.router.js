const express = require("express");
const { hasAccess } = require("../../middlewares/auth.middleware");
const {
  httpGetTickets,
  httpGetTicketDetails,
  httpGetTicketStatutsList,
  httpCreateIntervention,
  httpCreateTicket,
  httpGetClientTickets,
} = require("./tickets.controller");

const ticketsRouter = express.Router();

ticketsRouter.get("/", hasAccess, httpGetTickets);
ticketsRouter.get("/details/:ref", hasAccess, httpGetTicketDetails);
ticketsRouter.get("/statuts", hasAccess, httpGetTicketStatutsList);
ticketsRouter.post("/new-intervention", hasAccess, httpCreateIntervention);
ticketsRouter.post("/new-ticket", hasAccess, httpCreateTicket);
ticketsRouter.get("/client-tickets", httpGetClientTickets);

module.exports = ticketsRouter;
