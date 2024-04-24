const Joi = require("joi");

const RollDTO = Joi.object({
  _id: Joi.string(),
  name: Joi.string().required(),
  permissions: Joi.string().required(),
  //  Admin = CRUD
  //  Lector = R
  //  Creador = CRU
  status: Joi.string().required(),
});

const validateDTO = (roll) => {
  const validated = RollDTO.validate(roll);
  if (validated.error) return false;
  return validated;
};

module.exports = {
  RollDTO,
  validateDTO,
};
