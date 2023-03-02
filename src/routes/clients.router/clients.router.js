const express = require("express");
const { hasAccess, isAdmin } = require("../../middlewares/auth.middleware");
const {
  httpSearchClient,
  httpGetAllClients,
  httpGetRaisonsScociales,
  httpUpdateClient,
  httpGetClientTickets,
  httpDeleteClient,
  httpAddRaisonSociale,
  httpCreateClient,
  httpGetClientMateriels,
} = require("./clients.controller");

const clientsRouter = express.Router();
clientsRouter.get("/", httpGetAllClients);
clientsRouter.get("/raisons-sociales", httpGetRaisonsScociales);
clientsRouter.put("/:id", httpUpdateClient);
clientsRouter.get("/search", httpSearchClient);
clientsRouter.get("/tickets/:id", httpGetClientTickets);
clientsRouter.delete("/delete/:id", isAdmin, httpDeleteClient);
clientsRouter.post("/raisons-sociales", httpAddRaisonSociale);
clientsRouter.post("/", httpCreateClient);
clientsRouter.get("/materiels/:clientId", httpGetClientMateriels);

module.exports = clientsRouter;
