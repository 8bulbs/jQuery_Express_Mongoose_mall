var Product=require("mongoose").model("Product");
var Index=require("mongoose").model("Index");

exports.index=(req,res)=>{
	Index.find().then(data=>{
		res.json(data)
	}).catch(err=>{
		res.json({err:err.message})
	})
}
//pages and sort search
exports.list=(req,res,next)=>{
	let connection= req.query.connection || /.*/,
			wear= req.query.wear || /.*/,
	    color= req.query.color || /.*/,
	    microphone= req.query.microphone || /.*/,
	    foldable= req.query.foldable || /.*/,
	    priceRange= req.query.priceRange || /.*/,
			saleCount=req.query.saleCount ,
			price=req.query.price,
			pageNumber=parseInt(req.query.pageNumber),
			pageSize=parseInt(req.query.pageSize),
			skip=(pageNumber-1)*pageSize,
			limit=pageSize,
			pageCount=null,
			totalCount=null,
			kw=null,
			arr=null,
			str=null,
			reg=null

			kw= req.query.kw.trim()

	if(kw!='undefined'){
				arr=kw.split(' ')
				str=arr.join('|')
				reg=new RegExp(`${str}`,'ig')
			}else{
				reg=/.*/
			}

			qd={
				"connection":connection,
				"wear":wear,
				"color":color,
				"microphone":microphone,
				"foldable":foldable,
				"priceRange":priceRange,
				"kw":reg
			},
			sort={}

	Product.find(qd).exec().then(docs=>{
		pageCount=Math.ceil(docs.length/pageSize)
		totalCount=docs.length
		if(saleCount&&!price){
			sort={'saleCount':saleCount}
			Product.find(qd).sort(sort).skip(skip).limit(limit).exec()
				.then(docs=>{
					docs.push({pageCount:pageCount,totalCount:totalCount})
					res.json(docs)
				}).catch(err=>{
					console.log(err)
				})
		}
		if(!saleCount&&price){
			sort={'price':price}
			Product.find(qd).sort(sort).skip(skip).limit(limit).exec()
				.then(docs=>{
					docs.push({pageCount:pageCount,totalCount:totalCount})
					res.json(docs)
				}).catch(err=>{
					console.log(err)
				})
		}
		if(saleCount&&price){
			Product.find(qd).sort({'price':price}).sort({'saleCount':saleCount}).skip(skip).limit(limit).exec()
				.then(docs=>{
					docs.push({pageCount:pageCount,totalCount:totalCount})
					res.json(docs)
				}).catch(err=>{
					console.log(err)
				})
		}
		if(!saleCount&&!price){
			Product.find(qd).skip(skip).limit(limit).exec()
				.then(docs=>{
					docs.push({pageCount:pageCount,totalCount:totalCount})
					res.json(docs)
				}).catch(err=>{
					console.log(err)
				})
		}
	}).catch(err=>{
		console.log(err)
	})
}

exports.details=(req,res,next)=>{
	Product.findOne(req.query).then(doc=>{
		var familyId=doc.familyId
		Product.find({"familyId":familyId}).exec()
			.then(docs=>{
			res.json(docs)
		}).catch(err=>{
			console.log(err)
		})
	})
}

