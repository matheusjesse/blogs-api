const createModelBlogPost = (sequelize, DataTypes) => {
    const BlogPost = sequelize.define('BlogPost', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        title: DataTypes.STRING,
        content: DataTypes.STRING,
        userId:{ 
          type: DataTypes.INTEGER,
          references: {
            model: 'Users',
            key: 'id',
          }
        },
        published: DataTypes.DATE,
        updated: DataTypes.DATE,
    }, {
        tableName: 'BlogPosts',
        timestamps: false,
    });

    BlogPost.associate = (models) => {
        BlogPost.belongsTo(models.User,
        { foreignKey: 'userId', as: 'user'})
    };

    return BlogPost;
}

module.exports = createModelBlogPost;