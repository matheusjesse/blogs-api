const { userSchema } = require('../schemas/userSchema');

const userValidation = (req, res, next) => {
  const { error } = userSchema.validate(req.body);

  if (error) return res.status(400).json({ message: error.message });
  
  next();
};

module.exports = userValidation;
