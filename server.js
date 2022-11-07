const http = require("http");
const express = require("express");
const app = express();
const cors = require("cors");
const { authRoute } = require("./src/api/routes/index");

//middleware
app.use(express.json());
app.use((req, res, next) => {
  next();
});

const httpServer = http.createServer(app);
const startServer = (port) => {
  app.use("*", cors());
  app.use("/api/v1/auth/", authRoute);
  httpServer.listen(port, () => {
    console.info(`Server is on ${port}`);
  });
  httpServer.timeout = 60000;
};

module.exports = startServer;
