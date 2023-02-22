const express = require("express");
const { hasAccess } = require("../middlewares/auth.middleware");
const authRouter = require("./auth.router");
const clientsRouter = require("./clients.router");
const ticketsRouter = require("./tickets.router");

const api = express.Router();

api.use("/auth", authRouter);
api.use("/clients", clientsRouter);
api.use("/tickets", hasAccess, ticketsRouter);

module.exports = api;
