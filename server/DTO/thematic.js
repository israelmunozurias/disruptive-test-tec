const Joi = require("joi");

const ThematicDTO = Joi.object({
  _id: Joi.string(),
  name: Joi.string().required(),
  permissions: Joi.array().items(Joi.string().required()),
  // ['img', 'video', 'files']
  status: Joi.string().required(),
});

const validateDTO = (thematic) => {
  const validated = ThematicDTO.validate(thematic);
  if (validated.error) return false;
  return validated;
};

module.exports = {
  ThematicDTO,
  validateDTO,
};
