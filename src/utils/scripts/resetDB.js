require("dotenv").config();

const { resetDB } = require("../../services/sequelize");

resetDB();
