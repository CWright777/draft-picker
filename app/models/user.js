var mongoose = require('mongoose');

var UsersSchema = new mongoose.Schema({
  name: String,
  wishes: [{type: mongoose.Schema.ObjectId, ref:"Wish"}],
  created_at: { type: Date, default: Date.now }
})

var User = mongoose.model('User', UsersSchema);
