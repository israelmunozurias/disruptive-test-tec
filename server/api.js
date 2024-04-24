"use strict";

const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const DTO = require("./DTO/index");
const CONST = require("./config/constants");
const Server = require("./services/index");
const Controller = require("./controller/index");

const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

mongoose.connect(process.env.MONGODB_URL_DEV);

app.listen(port, async () => {
  console.log(`Server listening on ${port}`);
  const userValid = DTO.UserDTO.validateDTO(CONST.userAdmin);
  if (userValid) await Server.User.create(CONST.userAdmin);
});

app.use("/user", Controller.user);
