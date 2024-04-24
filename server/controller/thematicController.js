const express = require("express");
const thematic = express.Router();
const Server = require("../services/index");
const DTO = require("../DTO/index");

thematic.post("/set", async (req, res) => {
  const valid = DTO.ThematicDTO.validateDTO(req.body);
  if (valid) {
    const registered = await Server.Thematic.create(req.body);
    res.status(201).json(registered);
  } else return res.status(404).json({ error: valid });
});

thematic.get("/gets", async (req, res) => {
  const _id = req.query._id;
  const name = req.query.name;

  const result = await Server.Thematic.gets({ _id, name });
  if (result) res.status(200).json(result);
  else res.status(404).json(false);
});

thematic.put("/update", async (req, res) => {
  const valid = DTO.ThematicDTO.validateDTO(req.body);
  if (valid) {
    const updated = await Server.Thematic.update(req.body);

    res.status(201).json(updated);
  } else return res.status(304).json({ error: valid });
});

thematic.delete("/remove", async (req, res) => {
  if (req.body) {
    const deleted = await Server.Thematic.remove(req.body);

    res.status(204).json({ message: "Eliminado", deleted });
  } else return res.status(400).json({ error: req.body });
});

module.exports = thematic;
