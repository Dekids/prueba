'use strict';
const bcrypt = require('bcrypt');
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password_hash: DataTypes.STRING,
    password: DataTypes.VIRTUAL,
    age: DataTypes.INTEGER,
    dekids_coins: DataTypes.INTEGER,
    profile: DataTypes.STRING
  }, {});
  User.login = function(username, password){
    //buscar al usuario
    return User.findOne({
      where:{
        username:username
      }
    }).then(user=>{
      if(!user) return null;
      return user.authenticatePassword(password).then(valid=> valid ? user :null);
    });
  };
  User.prototype.authenticatePassword = function(password){
    return new Promise((res,rej)=>{
      bcrypt.compare(password,this.password_hash,function(err,valid){
        if(err) return rej(err);
        res(valid);
      })
    })
  };
  User.associate = function(models) {
    User.belongsToMany(models.Skill,{
      through:'UserSkills',
      as:'skills'
    });
  };
  User.beforeCreate(function(user,options){
    return new Promise((res,rej)=>{
      if (user.password) {
        bcrypt.hash(user.password,10, function(error,hash){
          user.password_hash = hash;
          res();
        })
      };
    })
  });
  return User;
};
