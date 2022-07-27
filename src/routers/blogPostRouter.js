const { Router } = require('express');
const verifyJWT = require('../middlewares/verifyJWT');
const blogPostController = require('../controllers/blogPostController');

const router = Router();

router.get('/', verifyJWT, blogPostController.getBlogPosts);
module.exports = router;