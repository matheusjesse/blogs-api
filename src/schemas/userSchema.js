const Joi = require('joi');

const userSchema = Joi.object({
    displayName: Joi.string().required().min(8).messages({
        'string.min': '"displayName" length must be at least 8 characters long',
    }),
    email: Joi.string().required().email().messages({
        'string.email': '"email" must be a valid email',
    }), 
    password: Joi.string().required().min(6).messages({
        'string.min': '"password" length must be at least 6 characters long',
    }),
    image: Joi.string().required().messages({
        'any.required': 'Some required fields are missing',
    }),             
    
});

module.exports = {
  userSchema,
};