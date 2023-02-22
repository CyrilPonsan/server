const express = require("express");

const {
  httpLogin,
  httpLogout,
  httpHandShake,
  //httpGenerateNewTokens,
} = require("../controllers/auth.controller");

const authRouter = express.Router();

authRouter.post("/", httpLogin);
authRouter.get("/logout", httpLogout);
authRouter.get("/handshake", httpHandShake);

module.exports = authRouter;
