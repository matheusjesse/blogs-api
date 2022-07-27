const { categorySchema } = require('../schemas/categorySchema');

const categoryValidation = (req, res, next) => {
  const { error } = categorySchema.validate(req.body);

  if (error) return res.status(400).json({ message: error.message });
  
  next();
};

module.exports = categoryValidation;
