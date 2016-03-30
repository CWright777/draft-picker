var Users = require('../controllers/usersController.js');
var Items = require('../controllers/itemsController.js')

module.exports = function(app){
  app.post('/users',function(req,res){
    Users.create(req,res);
  })
  app.get('/items',function(req,res){
    Items.index(req,res);
  })
  app.post('/items',function(req,res){
    Items.create(req,res);
  })
  app.post('/wishes', function(req,res){
    Wishes.create(req,res);
  })
};
