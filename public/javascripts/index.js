$(()=>{
				//Tiny change box
	     document.querySelector('.floors_huge_box').onclick=e=>{
		     let tar=e.target
		     if(tar.className=='change_images_left'){
			     e.preventDefault()
			     let container=tar.parentNode.querySelector('.change_images_container')
			     let ln=container.children.length
			     let left=container.style.left=container.offsetLeft;
			     let toRight=tar.parentNode.querySelector('.change_images_right')
			     left-=200
			     container.style.left=left+'px'
			     toRight.style.display='block'
			     if(left<=-(ln-1)*200){
				     tar.style.display='none'
			     }
		     }else if(tar.className=='change_images_right'){
			     e.preventDefault()
			     let container=tar.parentNode.querySelector('.change_images_container')
			     let ln=container.children.length
			     let left=container.style.left=container.offsetLeft;
			     let toLeft=tar.parentNode.querySelector('.change_images_left')
			     left+=200
			     container.style.left=left+'px'
			     toLeft.style.display='block'
			     if(left>=0){
				     tar.style.display='none'
			     }
		     }
	     }

			//Floor scroll
			let dist=0,dura=500,steps=50,
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
			let $floor=$('[data-scroll*=floor]')
			$floor.click(e=>{
				e.preventDefault()
				let $tar=$(e.target)
				let i=$floor.index($tar)
				i==0 && moveTo(860)
				i==1 && moveTo(1550)
				i==2 && moveTo(2220)
				i==3 && moveTo(2920)
				i==4 && moveTo(3585)
				i==5 && moveTo(0)
				i==6 && moveTo(0)
				i==-1 && moveTo(0)
			})

			//Floor high light
			function aside(){
				let scrollTop=document.documentElement.scrollTop||document.body.scrollTop
				if(scrollTop<500){
					document.querySelector('.aside_left').style.display='none'
					document.querySelector('.aside_right').style.display='none'
				}else{
					document.querySelector('.aside_left').style.display = 'block'
					document.querySelector('.aside_right').style.display = 'block'
				}
				if(scrollTop>=500&&scrollTop<=1200){
					$('[data-scroll=floor1]').css('backgroundColor','#1e96d4').siblings().css('backgroundColor','#918888')
				}else if(scrollTop>=1200&&scrollTop<=1900){
					$('[data-scroll=floor2]').css('backgroundColor','#1e96d4').siblings().css('backgroundColor','#918888')
				}else if(scrollTop>=1900&&scrollTop<=2600){
					$('[data-scroll=floor3]').css('backgroundColor','#1e96d4').siblings().css('backgroundColor','#918888')
				}else if(scrollTop>=2600&&scrollTop<=3300){
					$('[data-scroll=floor4]').css('backgroundColor','#1e96d4').siblings().css('backgroundColor','#918888')
				}else if(scrollTop>=3300){
					$('[data-scroll=floor5]').css('backgroundColor','#1e96d4').siblings().css('backgroundColor','#918888')
				}
			}
			window.addEventListener("scroll",aside)

			//Carousel
			let left=$('.carousel_container').css('left')
			let translate=left
			let carousel_moved=0
			const width=1920
			let carousel_timer=setInterval(carousel,3000)
			function carousel(){
				if(carousel_moved>=4){
					carousel_moved=0;
					$('.carousel_container').css('left',left)
				}
				carousel_moved++
				translate=-carousel_moved*width
				$('.carousel_container').animate({'left':translate+'px'},500,'linear')
				$(`.carousel_controler>div:nth-child(${carousel_moved+1})`)
					.addClass('current').siblings().removeClass('current')
				if(carousel_moved>=4){
					$('.carousel_controler>div:first-child')
						.addClass('current').siblings().removeClass('current')
				}
			}
			$('.carousel_controler>div>img').hover(
				function(){
					clearInterval(carousel_timer)
					carousel_moved=$(this).parent().index()-1
					carousel()
				},
				function(){
					carousel_timer=setInterval(carousel,3000)
				}
			)
			//ad
			$('.modal-ad').css('height',innerHeight)
			$('.modal-ad>div>span').on('click',function(){
				$('.modal-ad').hide()
			})
})