var mongoose = require('mongoose');

var WishesSchema = new mongoose.Schema({
  priority: Number,
  _item: {type: mongoose.Schema.ObjectId, ref:"Wish"},
  _user: {type: mongoose.Schema.ObjectId, ref:"User"},
  created_at: { type: Date, default: Date.now }
})

var Wish = mongoose.model('Wish',WishesSchema)
