const request = require("supertest");
const app = require("../../app");
require("dotenv").config();
const jwt = require("jsonwebtoken");

const { initDB } = require("../../services/sequelize");

describe("API", () => {
  beforeAll(async () => {
    await initDB();
  });
  describe("Test GET /tickets", () => {
    test("réponse attendue : 200", async () => {
      const response = await request(app).get("/v1/tickets");
      expect(200);
    });
  });
});
