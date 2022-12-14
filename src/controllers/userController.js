const authService = require('../services/authService');
const userService = require('../services/userService');

const userController = {
 create: async (req, res) => {
  const { displayName, email, password, image } = req.body;
  
  const user = await userService.create({
    displayName,
    email,
    password,
    image,
  });

  if (user.message) return res.status(409).json({ message: user.message });

  const token = await authService.login(email, password);
  
  res.status(201).json({ token });
 },
 getUsers: async (_req, res) => {
  const users = await userService.getUsers();
  return res.status(200).json(users);
 },
 getUsersById: async (req, res) => {
  const { id } = req.params;
  const user = await userService.getUsersById(id);

  if (!user) return res.status(404).json({ message: 'User does not exist' });

  return res.status(200).json(user);  
 },
};

module.exports = userController;
