const express = require("express");
const { hasAccess } = require("../../middlewares/auth.middleware");
const {
  httpGetOneMateriel,
  httpDeleteMateriel,
  httpCreateMateriel,
  httpUpdateMateriel,
} = require("./materiel.controller");

const materielRouter = express.Router();

materielRouter.get("/:ref", httpGetOneMateriel);
materielRouter.delete("/:ref", httpDeleteMateriel);
materielRouter.post("/", httpCreateMateriel);
materielRouter.put("/:ref", httpUpdateMateriel);

module.exports = materielRouter;
