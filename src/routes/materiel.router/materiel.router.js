const express = require("express");
const {
  httpGetOneMateriel,
  httpDeleteMateriel,
  httpCreateMateriel,
  httpUpdateMateriel,
  httpGetClientMateriels,
} = require("./materiel.controller");

const materielRouter = express.Router();

materielRouter.get("/:ref", httpGetOneMateriel);
materielRouter.delete("/:ref", httpDeleteMateriel);
materielRouter.post("/", httpCreateMateriel);
materielRouter.put("/:ref", httpUpdateMateriel);
materielRouter.get("/client/:id", httpGetClientMateriels);

module.exports = materielRouter;
