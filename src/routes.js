const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const jsonParser = bodyParser.json();
const service = require("./service");

router.get("/", async (req, res) => {
  const tasks = await service.getTasks();
  res.send(tasks);
});

router.post("/", jsonParser, async (req, res) => {
  await service.saveTask(req);
  res.sendStatus(201);
});

router.delete("/:id", async (req, res) => {
  await service.deleteTask(req.params.id);
  res.sendStatus(200);
});

module.exports = router;
