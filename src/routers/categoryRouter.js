const { Router } = require('express');
const verifyJWT = require('../middlewares/verifyJWT');
const categoryController = require('../controllers/categoryController');
const categoryValidation = require('../middlewares/categoryValidation');

const router = Router();

router.post('/', verifyJWT, categoryValidation, categoryController.create);
router.get('/', verifyJWT, categoryController.getCategories);
module.exports = router;