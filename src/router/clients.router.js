const express = require("express");
const { hasAccess, isAdmin } = require("../middlewares/auth.middleware");
const {
  httpSearchClient,
  httpGetAllClients,
  httpGetClientTickets,
  httpDeleteClient,
  httpUpdateClient,
} = require("../controllers/clients.controller");

const clientsRouter = express.Router();

clientsRouter.get("/", httpGetAllClients);
clientsRouter.put("/update/:id", httpUpdateClient);
clientsRouter.get("/search", httpSearchClient);
clientsRouter.get("/tickets/:id", httpGetClientTickets);
clientsRouter.delete("/delete/:id", isAdmin, httpDeleteClient);

module.exports = clientsRouter;
