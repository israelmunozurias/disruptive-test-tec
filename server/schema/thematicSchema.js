const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const SchemaTypes = mongoose.SchemaTypes;

const thematicSchema = new Schema(
  {
    name: { type: String, required: true },
    permissions: { type: SchemaTypes.Mixed, required: true },
    // ['img', 'video', 'files']
    status: { type: String, required: true },
  },
  { versionKey: false, timestamps: true }
);

const Thematic = mongoose.model("thematic", thematicSchema);

module.exports = Thematic;
