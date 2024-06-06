"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class Follower extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Follower.belongsTo(models.User, { 
        foreignKey: "follower_id",
        as: "follower"
      }),
      Follower.belongsTo(models.User, { 
        foreignKey: "user_id",
        as: "user"
      })
    }
  }
  Follower.init(
    {
      user_id: DataTypes.INTEGER,
      follower_id: DataTypes.INTEGER,
      created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    },
    {
      sequelize,
      modelName: "Follower",
      tableName: "followers",
    }
  )
  return Follower
}
