const Joi = require('joi');

const authSchema = Joi.object({
    email: Joi.string().required().messages({
        'any.required': 'Some required fields are missing',
    }),
    password: Joi.string().required().messages({
        'any.required': 'Some required fields are missing',
    }),             
    
});

module.exports = {
  authSchema,
};
