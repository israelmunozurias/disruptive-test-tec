const express = require("express");
const roll = express.Router();
const Server = require("../services/index");
const DTO = require("../DTO/index");

roll.post("/set", async (req, res) => {
  const valid = DTO.RollDTO.validateDTO(req.body);
  if (valid) {
    const registered = await Server.Roll.create(req.body);
    res.status(201).json(registered);
  } else return res.status(404).json({ error: valid });
});

roll.get("/gets", async (req, res) => {
  const _id = req.query._id;
  const name = req.query.name;
  const result = await Server.Roll.gets({ _id, name });
  if (result) res.status(200).json(result);
  else res.status(404).json(false);
});

roll.put("/update", async (req, res) => {
  const valid = DTO.RollDTO.validateDTO(req.body);
  if (valid) {
    const updated = await Server.Roll.update(req.body);
    res.status(201).json(updated);
  } else return res.status(304).json({ error: valid });
});

roll.delete("/remove", async (req, res) => {
  if (req.body) {
    const deleted = await Server.Roll.remove(req.body);
    res.status(204).json({ message: "Eliminado", deleted });
  } else return res.status(400).json({ error: req.body });
});

module.exports = roll;
