let User=require("mongoose").model("User"),
    Product=require("mongoose").model("Product")

exports.isLogin=(req,res,next)=>{
  if(!req.session.userId)
    return res.send({ok:0,msg:"用户未登录"})
  else
    return res.send({ok:1,msg:req.session.userName})
}

exports.login=(req,res,next)=>{
  var user=new User(req.body);
  User.findOne({userName:user.userName,userPassword:user.userPassword})
    .then(user=>{
      if(user){
        req.session.userId=user._id
        req.session.userName=user.userName
        res.send({ok:1,msg:user.userName})
      }else{
        res.send({ok:0,msg:"用户名或密码有误"})
      }
    })
}

exports.validateName=(req,res,next)=>{
  User.findOne({userName:req.body.userName})
  .then(user=>{
      if(user){
        res.send({ok:0,msg:'该用户名已被占用'})
      }else{
        res.send({ok:1,msg:'该用户名可以使用'})
      }
    })
}

exports.register=(req,res,next)=>{
  if(!req.session.userId){
    var user=new User(req.body);
    user.save()
      .then(user=>{
        res.send({ok:1,msg:'注册成功'})
      })
      .catch(err=>{
        console.log(err)
        req.session.msg=getErrorMessage(err);
        res.send({ok:0,msg:err.message})
      })
  }
}

exports.logout=(req,res)=>{
  req.session.userId=null;
  res.redirect("/");
}

exports.addToCart=(req,res,next)=>{
	let userName=req.session.userName,
		productId=req.body.productId,
		checked=req.body.checked,
		cartCount=parseInt(req.body.cartCount)

	User.findOne({"userName":userName})
		.then(doc=>{
			let item=null
			for(let val of doc.cartList){
				if(val.productId==productId){
					item=val
					val.checked=checked
					val.cartCount=cartCount
					doc.save().then(doc=>{
						res.send(doc.cartList)
					}).catch(err=>{
						res.send({ok:0,err:err.message})
					})
				}
			}
			if(!item){
				Product.findOne({productId:productId})
					.then(p=>{
						p.checked=checked
						p.cartCount=cartCount
						doc.cartList.push(p)
						doc.save().then(doc=>{
							res.json(doc.cartList)
						}).catch(err=>{
							res.send({ok:0,err:err.message})
						})
					}).catch(err=>{
						res.send({ok:0,err:err.message})
					})
			}
		})
		.catch(err=>{
			res.send({ok:0,err:err.msg})
		})
}

exports.getCart=(req,res,next)=>{
	let userName=req.session.userName
	User.findOne({userName:userName})
		.then(doc=>{
			res.json(doc.cartList)
		})
		.catch(err=>{
			res.json({ok:0,err:err.message})
		})
}

exports.deleteOneItem=(req,res,next)=>{
	let userName=req.session.userName,
		productId=req.query.productId
	User.findOne({userName:userName})
		.then(doc=>{
			for(let i in doc.cartList){
				if(doc.cartList[i].productId==productId){
					doc.cartList.splice(i,1)
					doc.save()
						.then(doc=>{
							res.json({ok:1})
						})
						.catch(err=>{
              res.json({ok:0,err:err.message})
						})
				}
			}
		})
		.catch(err=>{
			res.json({ok:0,err:err.message})
		})
}

exports.deleteAll=(req,res,next)=>{
	let userName=req.session.userName
	User.findOne({userName:userName})
		.then(doc=>{
			doc.cartList=[]// why .length=0 not work
			doc.save()
				.then(doc=> {
					res.json({ok: 1})
				})
				.catch(err=> {
					res.json({ok: 0, err: err.message})
				})
		})
		.catch(err=> {
			res.json({ok: 0, err: err.message})
		})
}

exports.deleteSome=(req,res,next)=>{
	let userName=req.session.userName,
			products=req.query.products.trim().split(' ')
	User.findOne({userName:userName})
		.then(doc=>{
			for(var i=0;i<doc.cartList.length;i++){
				if(products.indexOf(`${doc.cartList[i].productId}`)!=-1){
					doc.cartList.splice(i,1)
					i--  //!!!!!!!
				}
			}
			doc.save()
				.then(doc=>{
					res.json({ok: 1})
				})
				.catch(err=> {
					res.json({ok: 0, err: err.message})
				})
		})
		.catch(err=> {
			res.json({ok: 0, err: err.message})
		})
}

exports.selectAll=(req,res,next)=>{
	let userName=req.session.userName,
			checked=req.body.checked
	User.findOne({userName:userName})
		.then(doc=>{
			for(var val of doc.cartList){
				val.checked=checked
			}
			doc.save()
				.then(doc=> {
					res.json({ok: 1})
				})
				.catch(err=> {
					res.json({ok: 0, err: err.message})
				})
		})
		.catch(err=> {
			res.json({ok: 0, err: err.message})
		})
}

exports.search=(req,res,next)=>{
	let kw=req.query.kw,
			arr=kw.split(' '),
			str=arr.join('|'),
	  	reg=new RegExp(`${str}`,'ig')
	Product.find({kw:{$regex:reg}})
		.then(docs=>{
			res.json(docs)
		})
		.catch(err=>{
			res.json({ok:0,err:err.message})
		})
}