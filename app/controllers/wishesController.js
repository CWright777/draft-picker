var mongoose = require('mongoose');

var Item = mongoose.model('Item');
var User = mongoose.model('User');

module.exports = {
  //index: function(req,res){
    //Item.find({}, function(err,items){
      //if(err){
        //console.log(err);
      //} else {
        //res.json(items)
      //}
    //})
  //},
  //create: function(req,res){
    //var newItem = new Item({
      //name: req.body.name,
      //img: req.body.img
    //})
    //newItem.save(function(err){
      //if(err){
        //console.log(err);
      //} else {
        //res.redirect('/items')
      //}
    //})
  //}
}
