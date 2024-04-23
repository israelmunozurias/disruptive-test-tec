const Joi = require("joi");

const ThematicDTO = Joi.object({
  name: Joi.string().required(),
  permissions: Joi.array().items(Joi.string().required()),
  // ['img', 'video', 'files']
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
