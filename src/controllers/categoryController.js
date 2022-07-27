const categoryService = require('../services/categoryService');

const categoryController = {
    create: async (req, res) => {
      const { name } = req.body;
      const category = await categoryService.create({
        name,
      });
      res.status(201).json(category);
    },
    getCategories: async (_req, res) => {
      const categories = await categoryService.getCategories();
      return res.status(200).json(categories);
     },
};

module.exports = categoryController;