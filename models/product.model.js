var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var produtSchema = new Schema({
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
});
produtSchema.set("versionKey",false);
module.exports = mongoose.model('Product',produtSchema);
