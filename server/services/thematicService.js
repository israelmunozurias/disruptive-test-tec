const Schema = require("../schema/index");
const Utils = require("../utils/utils");
const CONST = require("../config/constants");
const mongoose = require("mongoose");

const create = async (data) => {
  return await Schema.Thematic.create(data)
    .then((result) => {
      return result;
    })
    .catch((error) => {
      console.error("Error not saved:", error);
      return false;
    });
};

const gets = async (data) => {
  const result = await Schema.Thematic.aggregate([
    {
      $match: {
        $and: [
          Utils.isEqual("_id", data._id),
          Utils.isEqual("name", data.name),
        ],
      },
    },
    {
      $sort: {
        date: -1,
      },
    },
  ]);
  console.log("gets", result);
  return result;
};

const update = async (data) => {
  return await Schema.Thematic.findOneAndUpdate(
    { _id: { $eq: data._id } },
    data
  )
    .then((result) => {
      console.log("Updated:", result);
      return result;
    })
    .catch((error) => {
      console.error("Error not Updated:", error);
      return false;
    });
};

const remove = async (data) => {
  return await Schema.Thematic.findOneAndUpdate(
    { _id: { $eq: data._id } },
    { status: CONST.STATUS_CONSTANT.DELETE, deletedAt: new Date() }
  )
    .then((result) => {
      console.log("SoftDelete:", result);
      return result;
    })
    .catch((error) => {
      console.error("Error not SoftDelete:", error);
      return false;
    });
};

module.exports = {
  create,
  gets,
  update,
  remove,
};
