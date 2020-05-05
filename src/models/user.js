'use strict';
import Sequelize from 'sequelize';

export default class User extends Sequelize.Model {
  static init(sequelize, DataTypes) {
    return super.init({
      name: {
        type: DataTypes.INTEGER,
        defaultValue: Sequelize.NOW,
      },
    });
  }

  static associations(model) {
    
  }
}
