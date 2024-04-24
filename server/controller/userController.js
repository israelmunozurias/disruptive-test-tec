const express = require("express");
const user = express.Router();
const Server = require("../services/index");
const DTO = require("../DTO/index");

user.get("/login", async (req, res) => {
  const user = req.query.user;
  const password = req.query.password;

  const result = await Server.User.login({ user, password });
  if (result) res.status(200).json({ message: "Logeado", result });
  else res.status(404).json(registered);
});

user.post("/set", async (req, res) => {
  const valid = DTO.UserDTO.validateDTO(req.body);
  if (valid) {
    const registered = await Server.User.create(req.body);
    res.status(201).json(registered);
  } else return res.status(404).json({ error: valid });
});

user.get("/gets", async (req, res) => {
  const user = req.query.user;
  const mail = req.query.mail;

  const result = await Server.User.gets({ user, mail });
  if (result) res.status(200).json(result);
  else res.status(404).json(false);
});

user.put("/update", async (req, res) => {
  const valid = DTO.UserDTO.validateDTO(req.body);
  if (valid) {
    const updated = await Server.User.update(req.body);

    res.status(201).json({ message: "Usuario modificado", updated });
  } else return res.status(304).json({ error: valid });
});

user.delete("/remove", async (req, res) => {
  if (req.body) {
    const deleted = await Server.User.remove(req.body);

    res.status(204).json({ message: "Eliminado", deleted });
  } else return res.status(400).json({ error: req.body });
});

module.exports = user;
