const categoryService = require('../services/categoryService');

const categoryController = {
    create: async (req, res) => {
      const { name } = req.body;
      const category = await categoryService.create({
        name,
      });
      res.status(201).json(category);
    },
};

module.exports = categoryController;