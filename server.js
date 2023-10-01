require("dotenv").config();
require("./src/db");

const express = require("express");
const routes = require("./src/routes");
const app = express();

app.use(routes);

app.listen(process.env.PORT, () => {
  console.log("App listening on port: " + process.env.PORT);
});

