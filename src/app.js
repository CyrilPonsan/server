const path = require("path");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const session = require("express-session");
const { initDB } = require("./services/sequelize");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const { sequelize } = require("./services/sequelize");

const SECRET_1 = process.env.SECRET_1;
const SECRET_2 = process.env.SECRET_2;

const api = require("./routes/v1.router");

const app = express();

//  initialise la bdd
initDB();

app.use(helmet());
app.use(
  cors({
    origin: "http://localhost:4200",
    credentials: true,
  })
);
app.use(morgan("combined"));
app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "public")));

app.use(
  session({
    secret: SECRET_1,
    resave: true,
    saveUninitialized: true,
    rolling: true,
    cookie: {
      maxAge: 10 * 1000,
      secure: false,
      sameSite: "lax",
    },
    store: new SequelizeStore({ db: sequelize }),
  })
);

app.use("/v1", api);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
  //res.send("coucou");
});
app.use(({ res }) => {
  const message = "Impossible de trouver les ressource demandées.";
  res.status(404).json(message);
});

module.exports = app;
