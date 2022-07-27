const { Router } = require('express');
const userValidation = require('../middlewares/userValidation');
const userController = require('../controllers/userController');
const verifyJWT = require('../middlewares/verifyJWT');

const router = Router();

router.post('/', userValidation, userController.create);
router.get('/', verifyJWT, userController.getUsers);
router.get('/:id', verifyJWT, userController.getUsersById);
module.exports = router;