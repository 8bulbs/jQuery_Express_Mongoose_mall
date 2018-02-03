require("../config/mongoose")
var mongoose=require("mongoose");
var Product=mongoose.model("Product");
var product=new Product({
	"productId":1,
	"productTitle":"URBANITE XL Wireless Black 无线蓝牙通讯新品耳机",
	"price":2199.00,
	"checked":String,
	"count":String,
	"images":[
		"images/products_images/urbanite_xl/urbanite_xl_wireless_black/urbanite_xl_wireless_black_01.png",
		"images/products_images/urbanite_xl/urbanite_xl_wireless_black/urbanite_xl_wireless_black_02.png",
		"images/products_images/urbanite_xl/urbanite_xl_wireless_black/urbanite_xl_wireless_black_03.png"
	],
	"connection":"蓝牙",
	"color":"黑色",
	"wear":"头戴式",
	"special":String,
	"familyId":1,
	"familyImage":"images/products_images/urbanite_xl/details_images/long.png"
	});

product.save()
	.then(res=>{
	console.log(res)
})
	.catch(err=>{
	console.log(err)
})

