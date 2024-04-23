const Joi = require("joi");

const ContentDTO = Joi.object({
  name: Joi.string().required(),
  idThematic: Joi.string().required(),
  img: Joi.string().required(),
  content: {
    img: Joi.string(),
    video: Joi.string(),
    urlYoutube: Joi.string(),
    document: Joi.string(),
  },
});

const validateDTO = (content) => {
  const validated = ContentDTO.validate(content);
  if (validated.error) return false;
  return validated;
};

module.exports = {
  ContentDTO,
  validateDTO,
};
