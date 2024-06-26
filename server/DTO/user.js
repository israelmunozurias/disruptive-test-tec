const Joi = require("joi");

const UserDTO = Joi.object({
  _id: Joi.string(),
  name: Joi.string().required(),
  lastName: Joi.string().required(),
  user: Joi.string().required(),
  mail: Joi.string().email().required(),
  password: Joi.string().required(),
  roll: Joi.string().required(),
  status: Joi.string().required(),
});

const validateDTO = (user) => {
  const validated = UserDTO.validate(user);
  if (validated.error) return false;
  return validated;
};

module.exports = {
  UserDTO,
  validateDTO,
};
