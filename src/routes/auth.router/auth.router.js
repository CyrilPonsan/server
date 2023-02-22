const express = require("express");
const { hasAccess } = require("../../middlewares/auth.middleware");

const {
  httpLogin,
  httpGenerateNewTokens,
  httpHandShake,
} = require("./auth.controller");

const authRouter = express.Router();

//  authentification utilisateur
authRouter.post("/", httpLogin);

//  rafraîchissement des tokens
authRouter.post("/refresh-tokens", httpGenerateNewTokens);
authRouter.get("/handshake", hasAccess, httpHandShake);

module.exports = authRouter;
