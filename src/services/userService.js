const { User } = require('../database/models');

const userService = {
    create: async ({ displayName, email, password, image }) => {
        const checkUserExist = await User.findOne({ where: { email } });
        if (checkUserExist) return { message: 'User already registered' };
        
        const user = await User.create({ displayName, email, password, image });
        return user;
    },
};

module.exports = userService;
