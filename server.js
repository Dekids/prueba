const express = require('express');
const mysql2 = require('mysql2');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const methodOverride = require('method-override');
const session =require('express-session');

const app = express();

app.use('/assets',express.static('assets'));


const sessionsRoutes = require('./routes/sessions_routes');
const homeRoutes = require('./routes/home_routes');

const findUserMiddleware = require('./middlewares/find_user');
const authUser = require('./middlewares/auth_user');
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride('_method'));
app.set('view engine', 'ejs');


app.use(session({
  secret:['tertertergerger','534534534tergert34'],
  saveUninitialized:false,
  resave:false
}));

app.use(findUserMiddleware);
app.use(authUser);
app.use(sessionsRoutes);
app.use(homeRoutes);

app.get('/',function(req,res){
  res.render('login');
});

app.get('/adventures',function(req,res){
  res.render('adventures');
});


app.listen(3000);
