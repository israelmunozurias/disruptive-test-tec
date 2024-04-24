const express = require("express");
const content = express.Router();
const Server = require("../services/index");
const DTO = require("../DTO/index");

content.post("/set", async (req, res) => {
  const valid = DTO.ContentDTO.validateDTO(req.body);
  if (valid) {
    const registered = await Server.Content.create(req.body);
    res.status(201).json(registered);
  } else return res.status(404).json({ error: valid });
});

content.get("/gets", async (req, res) => {
  const _id = req.query._id;
  const idThematic = req.query.idThematic;
  const result = await Server.Content.gets({ _id, idThematic });
  if (result) res.status(200).json(result);
  else res.status(404).json(false);
});

content.put("/update", async (req, res) => {
  const valid = DTO.ContentDTO.validateDTO(req.body);
  if (valid) {
    const updated = await Server.Content.update(req.body);
    res.status(201).json(updated);
  } else return res.status(304).json({ error: valid });
});

content.delete("/remove", async (req, res) => {
  if (req.body) {
    const deleted = await Server.Content.remove(req.body);
    res.status(204).json({ message: "Eliminado", deleted });
  } else return res.status(400).json({ error: req.body });
});

module.exports = content;
