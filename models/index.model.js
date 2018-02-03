var mongoose=require("mongoose");
var Schema=mongoose.Schema;

var indexSchema=new Schema({
    "banner":[],
    "floorImg1":[],
    "floorImg2":[],
    "floorImg3":[]
});
module.exports=mongoose.model("Index",indexSchema);
