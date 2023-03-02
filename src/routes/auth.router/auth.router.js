const express = require("express");
const { hasAccess } = require("../../middlewares/auth.middleware");

const { httpLogin, httpLogout, httpHandShake } = require("./auth.controller");

const authRouter = express.Router();

//  authentification utilisateur
authRouter.post("/", httpLogin);

//  rafraîchissement des tokens
//authRouter.post("/refresh-tokens", httpGenerateNewTokens);
authRouter.get("/handshake", hasAccess, httpHandShake);
authRouter.get("/logout", httpLogout);

module.exports = authRouter;
