const { User } = require('../database/models');

const userService = {
    create: async ({ displayName, email, password, image }) => {
        const checkUserExist = await User.findOne({ where: { email } });
        if (checkUserExist) return { message: 'User already registered' };
        
        const user = await User.create({ displayName, email, password, image });
        return user;
    },
    getUsers: async () => {
        const users = await User.findAll({
            attributes: { exclude: ['password'] },
        });
        return users;
    },
};

module.exports = userService;
