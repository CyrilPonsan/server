const express = require("express");
const { hasAccess } = require("../middlewares/auth.middleware");
const {
  httpSearchClient,
  httpGetAllClients,
} = require("../controllers/clients.controller");

const clientsRouter = express.Router();

clientsRouter.get("/", httpGetAllClients);
clientsRouter.get("/search", httpSearchClient);

module.exports = clientsRouter;
