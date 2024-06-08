"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class Like extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Like.hasMany(models.Post, { 
      //   foreignKey: "post_id",
      //   as: "post"
      // }),
      // Like.belongsTo(models.User, { 
      //   foreignKey: "userId",
      //   as: "user"
      // })
    }
  }
  Like.init(
    {
      user_id: DataTypes.INTEGER,
      post_id: DataTypes.INTEGER,
      created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    },
    {
      sequelize,
      modelName: "Like",
      tableName: "likes",
    }
  )
  return Like
}
