require("dotenv").config();
const http = require("http");

const app = require("./app");

const PORT = process.env.PORT || 4000;
const server = http.createServer(app);

function startServer() {
  server.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}...`);
  });
}

startServer();
