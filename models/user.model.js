var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  "userId":String,
  "userName":String,
  "userPassword":String,
  "cartList":[
    {
	    "productId":Number,
	    "familyId":Number,
	    "familyImage":String,
	    "productTitle":String,
	    "price":Number,
	    "connection":String,
	    "wear":String,
	    "color":String,
	    "microphone":String,
	    "foldable":String,
	    "priceRange":String,
	    "saleCount":Number,
	    "images":[],
	    "checked":String,
	    "cartCount":Number,
	    "kw":String
    }
  ]
});
userSchema.set("versionKey",false);
module.exports = mongoose.model("User",userSchema);
