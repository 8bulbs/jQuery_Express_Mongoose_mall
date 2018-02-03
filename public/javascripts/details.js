$(
		//render
	  $.get(`products/details?productId=${location.href.split('=')[1]}`)
		  .then(res=>{
			  let currentId=location.href.split('=')[1]
			  let html=''
				for(var val of res){
					if(val.productId==currentId){
						var current=val
					}
					html+=`<a href="details?productId=${val.productId}"
					 class=${val.productId==currentId ? "current" : ""}>${val.connection}版${val.color}</a>`
				}
				$('.details_top_right>p:nth-child(6)').html(html)
			  $('[data-images=details_top_left]')[0].src=current.images[0]

			  html=''
				for(var i=0;i<current.images.length;i++){
					html+=`<img class="medium" src="${current.images[i]}" alt="">`
				}
				$('[data-images=medium]').html(html)
			  $('[data-images=long]')[0].src=current.familyImage
			  $('.details_top>h5').html(current.productTitle)
			  $('.details_top_right>h3').html(current.productTitle)
			  $('.details_top_right>p:nth-child(2)>span:last-child').html(current.price+'.00')
				$('.details_top_right>p:nth-child(4)>span:last-child').html(current.saleCount)

			  //add to cart
			  let count=$('[data-count=count]').val()
			  $('[data-count=add]').click(()=>{
				  count++
				  $('[data-count=count]').val(count)
			  })
			  $('[data-count=minus]').click(()=>{
				  $('[data-count=count]').val(count>1 ? count-- : count=1)
			  })

	      //Magnifier
			  let imgs=document.querySelectorAll('img.medium')
			  let lImg=document.querySelector('.details_top_left>div>img')
			  let magnifier=document.querySelector('div.magnifier')
			  let superMask=document.querySelector('.superMask')
			  let mask=document.querySelector('.mask')
			  magnifier.style.backgroundImage=`url(${lImg.src})`
			  imgs[0].style.border='1px solid #149ED9'
			  imgs[0].parentNode.onmouseover=e=>{
				  if(e.target.nodeName=='IMG'){
					  let src=e.target.src
					  lImg.src=src
					  magnifier.style.cssText+=`background-image:url(${src})`
					  for(let img of imgs){
						  img.style.border='1px solid transparent'
					  }
					  e.target.style.border='1px solid #149ED9'
				  }
			  }
			  superMask.onmouseover=e=>{
				  mask.style.display='block'
				  magnifier.style.display='block'
			  }
			  superMask.onmouseout=e=>{
				  mask.style.display='none'
				  magnifier.style.display='none'
			  }
			  var MSIZE=570/2,MAX=570/2
			  superMask.onmousemove=e=>{
				  var t=e.offsetY-MSIZE/2,l=e.offsetX-MSIZE/2
				  t=t<0?0:t>MAX?MAX:t
				  l=l<0?0:l>MAX?MAX:l
				  mask.style.top=t+'px'
				  mask.style.left=l+'px'
				  magnifier.style.backgroundPosition=`-${l*960/570}px -${t*960/570}px`
			  }

			  //scrollToTop
			  let toTop=document.querySelector('.aside_right')
			  toTop.onclick=function(e){
				  e.preventDefault()
				  var scrollTop=0
				  moveTo(scrollTop)
			  }
			  var dist=0,dura=500,steps=50,
				  interval=dura/steps, step=0,
				  moved=steps, timer=null
			  function moveTo(targetTop){//启动移动:
				  if(timer==null){//防止动画叠加!
					  var scrollTop=document.documentElement.scrollTop
						  ||document.body.scrollTop
					  dist=targetTop-scrollTop
					  step=dist/steps
					  timer=setInterval(function(){
						  window.scrollBy(0,step)
						  moved--
						  if(moved==0){
							  clearInterval(timer)
							  timer=null
							  moved=steps
						  }
					  },interval)
				  }
			  }
			  function asideFix(){
				  var scrollTop=document.documentElement.scrollTop||document.body.scrollTop
				  if(scrollTop>=2000){
					  document.querySelector('.aside_right').style.display='block'
				  }else{
					  document.querySelector('.aside_right').style.display='none'
				  }
			  }
			  window.addEventListener('scroll',asideFix)

	  })
)    