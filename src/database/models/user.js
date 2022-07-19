const createModelUser = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: DataTypes.INTERGER,
        displayName: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        image: DataTypes.STRING,
    }, {
        tableName: 'Users',
    });

    return User;
}

module.exports = createModelUser;