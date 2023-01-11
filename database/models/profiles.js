'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profiles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Profiles.init({
    id: DataTypes.UUID,
    userId: DataTypes.BIGINT,
    roleId: DataTypes.INTEGER,
    imageUrl: DataTypes.STRING,
    codePhone: DataTypes.INTEGER,
    phone: DataTypes.INTEGER,
    countryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Profiles',
  });
  return Profiles;
};