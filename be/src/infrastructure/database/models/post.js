"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Post.belongsTo(models.User, { 
        foreignKey: "user_id",
        as: "user"
      })
      // Post.hasMany(models.Media, { 
      //   foreignKey: "post_id",
      //   as: "media"
      // })
    }
  }
  Post.init(
    {
      user_id: DataTypes.INTEGER,
      description: DataTypes.TEXT,
      created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
      updated_at: "updateTimestamp",
    },
    {
      sequelize,
      modelName: "Post",
      tableName: "posts",
    }
  )
  return Post
}
