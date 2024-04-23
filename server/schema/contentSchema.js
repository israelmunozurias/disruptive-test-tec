const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const SchemaTypes = mongoose.SchemaTypes;

const contentSchema = new Schema(
  {
    name: { type: String, required: true },
    idThematic: { type: String, required: true },
    img: { type: String, required: true }, // TODO: Imagen alusiba a su tematica
    content: { type: SchemaTypes.Mixed, required: true },
    //{
    //  img: [String],
    //  video: [String],
    //  urlYoutube: [String],
    //  document: [String],
    //},
  },
  { versionKey: false, timestamps: true }
);

const Content = mongoose.model("content", contentSchema);

module.exports = Content;
