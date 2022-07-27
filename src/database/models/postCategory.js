const createModelPostCategory = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define('PostCategory', {
        postId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            field: 'postId',
            references: {
                model: 'BlogPosts',
                key: 'id'
            }
        },
        categoryId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            field: 'categoryId',
            references: {
                model: 'Categories',
                key: 'id'
            }
        },
    }, {
        tableName: 'PostCategories',
        timestamps: false,
    });

    PostCategory.associate = (models) => {
        models.Category.belongsToMany(models.BlogPost, { 
            foreignKey: 'categoryId', 
            as: 'blogPost',
            otherKey: 'postId',
            through: PostCategory,
        });
        models.BlogPost.belongsToMany(models.Category, { 
            foreignKey: 'postId',
            as: 'categories',
            otherKey: 'categoryId',
            through: PostCategory,
        });
    }

    return PostCategory;
}

module.exports = createModelPostCategory;
