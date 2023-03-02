const express = require("express");
const { httpGetSolutions } = require("./knowledge.controller");

const knowledgeRouter = express.Router();

knowledgeRouter.post("/", httpGetSolutions);

module.exports = knowledgeRouter;
