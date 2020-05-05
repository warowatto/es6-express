'use strict';
const Model = require('sequelize').Model;

class post extends Model {
  static init(sequelize, DataTypes) {

  }

  static 
  static associate(models) {
    // associations can be defined here
  }
}

module.exports = (sequelize, DataTypes) => {
  post.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'post',
  });
  return post;
};