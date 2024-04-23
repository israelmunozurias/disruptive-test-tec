"use strict";

const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const CONST = require("./config/constants");
const CONTR = require("./controller/index");
const DTO = require("./DTO/index");

const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

mongoose.connect(
  "mongodb+srv://yeyel_92:Pps43koQugFUdbKe@cluster0.zgncp.mongodb.net/disruptive"
);

app.listen(port, async () => {
  console.log(`Server listening on ${port}`);
  console.log("antes", CONST.userAdmin);
  const userValid = DTO.UserDTO.validateDTO(CONST.userAdmin);
  if (userValid) await CONTR.User.createUser(CONST.userAdmin);
});

app.post("/setUser", async (req, res) => {
  await CONTR.User.getUsers(req.body);
  /*  const userValid = DTO.UserDTO.validateDTO(req.body);
  if (userValid) {
    const registered = await CONTR.User.createUser(req.body);

    res
      .status(201)
      .json({ message: "Usuario creado exitosamente", registered });
  } else
    return res
      .status(400)
      .json({ error: validationResult.error.details[0].message }); */
});
