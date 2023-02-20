const express = require("express");
const { hasAccess } = require("../middlewares/auth.middleware");
const {
  httpSearchClient,
  httpGetAllClients,
  httpGetClientTickets,
} = require("../controllers/clients.controller");

const clientsRouter = express.Router();

clientsRouter.get("/", httpGetAllClients);
clientsRouter.get("/search", httpSearchClient);
clientsRouter.get("/tickets/:id", httpGetClientTickets);

module.exports = clientsRouter;
