const express = require("express");

const {
  httpLogin,
  httpLogout,
  //httpGenerateNewTokens,
} = require("../controllers/auth.controller");

const authRouter = express.Router();

//  authentification utilisateur
authRouter.post("/", httpLogin);

//  rafraîchissement des tokens
//authRouter.post("/refresh-tokens", httpGenerateNewTokens);

authRouter.get("/logout", httpLogout);

module.exports = authRouter;
