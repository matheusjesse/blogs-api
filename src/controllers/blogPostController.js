const blogPostService = require('../services/blogPostService');

const blogPostController = {    
    getBlogPosts: async (_req, res) => {
      const blogPosts = await blogPostService.getBlogPosts();
      return res.status(200).json(blogPosts);
     },
};

module.exports = blogPostController;