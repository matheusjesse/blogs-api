const { Router } = require('express');
const userValidation = require('../middlewares/userValidation');
const userController = require('../controllers/userController');

const router = Router();

router.post('/', userValidation, userController.create);

module.exports = router;