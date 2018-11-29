'use strict';
module.exports = (sequelize, DataTypes) => {
  const Skill = sequelize.define('Skill', {
    name: DataTypes.STRING,
    dekids_coins: DataTypes.INTEGER
  }, {});
  Skill.associate = function(models) {
    Skill.belongsToMany(models.User,{
      through:'UserSkills',
      as:'Users'
    });
  };
  return Skill;
};
