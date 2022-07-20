const authService = require('../services/authService');
const { authSchema } = require('../schemas/loginSchema');

const authController = {
  login: async (req, res) => {
    const { email, password } = req.body;
    const { error } = await authSchema.validate(req.body);
    if (error) return res.status(400).json({ message: 'Some required fields are missing' });
    const token = await authService.login(email, password);

    if (token.message) return res.status(token.code).json({ message: token.message });

    return res.status(200).json({ token });
  },
};

module.exports = authController;
