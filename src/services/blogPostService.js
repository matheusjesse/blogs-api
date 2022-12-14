const { BlogPost, Category, User } = require('../database/models');

const blogPostService = {
        getBlogPosts: async () => {
        const blogPosts = await BlogPost.findAll({
            include: [
                { model: User, as: 'user', attributes: { exclude: ['password'] } },
                { model: Category, as: 'categories', through: { attributes: [] } },
            ],
        });
        return blogPosts;
    },
};

module.exports = blogPostService;