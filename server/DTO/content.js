const Joi = require("joi");

const ContentDTO = Joi.object({
  _id: Joi.string(),
  name: Joi.string().required(),
  idThematic: Joi.string().required(),
  img: Joi.string().required(),
  status: Joi.string().required(),
  content: {
    img: Joi.array().items(Joi.string()),
    video: Joi.array().items(Joi.string()),
    urlYoutube: Joi.array().items(Joi.string()),
    document: Joi.array().items(Joi.string()),
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
