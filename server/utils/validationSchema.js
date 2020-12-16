const Joi = require("@hapi/joi");

const validationSchema = Joi.object().keys({
  email: Joi.string().email().required(),
  password: Joi.string().alphanum().min(8).required(),
});

module.exports = validationSchema;
