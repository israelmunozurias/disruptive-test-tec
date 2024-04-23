const Schema = require("../schema/index");
const Utils = require("../utils/utils");
const CONST = require("../config/constants");

const login = async (login) => {
  console.log("login", login);

  return await Schema.User.findOne({
    userName: { $eq: user.userName },
    mail: { $eq: user.mail },
  });
};

const createUser = async (user) => {
  console.log("llege", user);
  return await Schema.User.create(user)
    .then((result) => {
      console.log("Saved:", result);
      return result;
    })
    .catch((error) => {
      console.error("Error not saved:", error);
      return false;
    });
};

const getUsers = async (user) => {
  console.log("getUser", user);

  const users = await Schema.User.aggregate([
    {
      $match: {
        $and: [
          Utils.isEqual("userName", user.userName),
          Utils.isEqual("mail", user.mail),
          /* Utils.isGreatEqualDate(
            "createdAt",
            user.createdAt?.replace(/-/g, "")
          ),
          Utils.isLessEqualDate("createdAt", user.createdAt?.replace(/-/g, "")),
          { status: CONST.STATUS_CONSTANT.ACTIVE }, */
        ],
      },
    },
    {
      $sort: {
        date: -1,
      },
    },
  ]);
  console.log("getUsers", users);
  return users;
};

const updateUser = async (user) => {
  return await new Schema.User.updateOne(
    { _id: { $eq: user._id } },
    { $set: { user } }
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

const deleteUser = async (user) => {
  return await new Schema.User.updateOne(
    { _id: { $eq: user._id } },
    { status: CONST.STATUS_CONSTANT.DELETE, deletedAt: new Date() }
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

module.exports = {
  login,
  createUser,
  getUsers,
  updateUser,
  deleteUser,
};
