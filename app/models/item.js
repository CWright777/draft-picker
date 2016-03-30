var mongoose = require('mongoose');

var ItemsSchema = new mongoose.Schema({
  name: String,
  img: String,
  wishes: [{type: mongoose.Schema.ObjectId, ref:"Wish"}],
  created_at: { type: Date, default: Date.now }
})

var Item = mongoose.model('Item',ItemsSchema)
