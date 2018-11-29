const User = require('../models').User;

module.exports ={
  new: function(req, res){
    res.render('login');
  },
  create: function(req,res){
    User.login(req.body.username, req.body.password)
        .then(user => {
          if(user){
            req.session.userId = user.id;
            res.redirect('/home');
          }else{
            console.log("Ingrese un usuario y contrasela válido");
            res.redirect('/');
          }
        })
        .catch(err=>{
      console.log(err);
    })
  },
  destroy: function (req, res) {
    req.session.destroy(function () {
      res.redirect('/');
    });
  }
};
