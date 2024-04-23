const userAdmin = {
  name: "ADMIN",
  lastName: "ADMIN",
  userName: "ADMIN", // unique,
  mail: "admin@gmail.com", // unique,
  password: "123456",
  roll: "as1d3a4s6d4asd65as4dsa", // _idRol
  status: "active",
};

const STATUS_CONSTANT = {
  ACTIVE: "active",
  DELETE: "eliminated",
};

module.exports = {
  STATUS_CONSTANT,
  userAdmin,
};
