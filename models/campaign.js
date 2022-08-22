'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Campaign extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Campaign.init({
  name: DataTypes.STRING, 
  tokenName: DataTypes.STRING, 
  tokenAddress: DataTypes.STRING, 
  initialBudget: DataTypes.STRING, 
  individualDistribution: DataTypes.STRING, 
  scoreRequired: DataTypes.STRING, 
  verifiableCredentials: DataTypes.STRING,
  status: DataTypes.STRING,
  attempts: DataTypes.JSON
  }, {
    sequelize,
    modelName: 'Campaign',
  });
  return Campaign;
};