'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserSkills = sequelize.define('UserSkills', {
    userId: DataTypes.INTEGER,
    skillId: DataTypes.INTEGER,
    dekids_coins: DataTypes.INTEGER
  }, {});
  UserSkills.associate = function(models) {
    // associations can be defined here
  };
  return UserSkills;
};