"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class Media extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Media.belongsTo(models.Post, {
      //   foreignKey: 'post_id',
      //   as: 'post'
      // })
    }
  }
  Media.init(
    {
      post_id: DataTypes.INTEGER,
      media_url: DataTypes.STRING,
      media_type: DataTypes.STRING(10),
      caption: DataTypes.TEXT,
      created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
      updated_at: "updateTimestamp",
    },
    {
      sequelize,
      modelName: "Media",
      tableName: "medias",
    }
  )
  return Media
}
