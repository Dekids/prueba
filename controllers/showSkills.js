const User = require('../models').User;
const Skill = require('../models').Skill;

module.exports ={
  show: function(req, res){
    User.findById(req.session.userId,{
      include:['skills']
    }).then(function(user){
      res.render('home',{user})
      //res.json(user)
    })
  }
}
