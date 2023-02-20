const express = require("express");

const {
  httpLogin,
  httpGenerateNewTokens,
} = require("../controllers/auth.controller");

const authRouter = express.Router();

//  authentification utilisateur
authRouter.post("/", httpLogin);

//  rafraîchissement des tokens
authRouter.post("/refresh-tokens", httpGenerateNewTokens);

module.exports = authRouter;
