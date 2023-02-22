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
} = require("./clients.controller");

const clientsRouter = express.Router();
clientsRouter.get("/", httpGetAllClients);
clientsRouter.get("/raisons-sociales", httpGetRaisonsScociales);
clientsRouter.put("/update/:id", httpUpdateClient);
clientsRouter.get("/search", httpSearchClient);
clientsRouter.get("/tickets/:id", httpGetClientTickets);
clientsRouter.delete("/delete/:id", isAdmin, httpDeleteClient);
clientsRouter.post("/raisons-sociales", httpAddRaisonSociale);
clientsRouter.post("/", httpCreateClient);

module.exports = clientsRouter;
