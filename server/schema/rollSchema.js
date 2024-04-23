const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const SchemaTypes = mongoose.SchemaTypes;

const rollSchema = new Schema(
  {
    name: { type: String, required: true },
    permissions: { type: [String], required: true },
    //  Admin = CRUD
    //  Lector = R
    //  Creador = CRU
  },
  { versionKey: false, timestamps: true }
);

const Roll = mongoose.model("roll", rollSchema);

module.exports = Roll;
