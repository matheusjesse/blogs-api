const { Category } = require('../database/models');

const categoryService = {
    create: async ({ name }) => {        
        const category = await Category.create({ name });
        return category;
    },
    getCategories: async () => {
        const categories = await Category.findAll();
        return categories;
    },
};

module.exports = categoryService;