"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      full_name: DataTypes.STRING,
      bio: DataTypes.STRING,
      phoneNumber: DataTypes.STRING,
      is_verified: DataTypes.STRING,
      is_premium: DataTypes.STRING,
      created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
      updated_at: "updateTimestamp",
    },
    {
      sequelize,
      modelName: "User",
      tableName: "users",
    }
  )
  return User
}
