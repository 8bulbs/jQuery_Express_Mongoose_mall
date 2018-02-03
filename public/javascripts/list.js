//random blocks
//var str=''
//for(var i=0;i<=177;i++){
//	let x=parseInt(Math.random()*1381)
//	let y=parseInt(Math.random()*2000)
//	str+=`${x}px ${y}px #0096d6,`
//}
//console.log(str)

$((()=>{
		let connection=" ", connectionM=null,color=" ", colorM=null,
			wear=" ", wearM=null,microphone=" ", microphoneM=null,
			foldable=" ",foldableM=null,priceRange=" ",priceRangeM=null
			pageNumber=1,pageSize=8,pageCount=null,
			saleCountClicked=0,priceClicked=0,
			kw= decodeURI(location.href.split('=')[1]) ? decodeURI(location.href.split('=')[1]) : " ",
			queryString =`?pageNumber=${pageNumber}&pageSize=${pageSize}&kw=${kw}&`
		function getList(queryString){
			console.log(queryString)
			$.get(`/products/list${queryString}`).then(res=> {
				let html = ''
				pageCount=res[res.length-1].pageCount
				for (var i = 0; i < res.length-1 && i < pageSize; i++) {
					let data = res[i]
					html += `<li>
								<a href="details?productId=${data.productId}">
								<img src="${data.images[0]}" alt=""/>
								<p>${data.productTitle}</p>
								<p><span class="rmb">¥</span><span class="price">${data.price + '.00'}</span></p>
								<p><span>月销量</span><span>${data.saleCount}</span></p>
								<p data-role="addToCart" data-productId="${data.productId}"><img src="images/base_images/icon-cart-list.png" alt=""/>
								<span>加入购物车</span></p>
								</a>
							</li>`
				}
				$('.goods-list>ul').html(html)
				$('[data-count=number]').html(res[res.length-1].totalCount)

				//page
				html = ''
				html += `<a class="prev ${pageNumber-1>0?'':'disabled'}" href="javascript:"><<上一页</a>
				<a data-role="page" data-page-value="${pageNumber-2}" class="${(pageNumber-2)>0 ? '' :'hide'}" href="#">${pageNumber-2}</a>
				<a data-role="page" data-page-value="${pageNumber-1}" class="${(pageNumber-1)>0 ? '' :'hide'}" href="#">${pageNumber-1}</a>
				<a class="current-page" href="javascript:">${pageNumber}</a>
				<a data-role="page"  data-page-value="${pageNumber+1}" class="${(pageNumber+1)>pageCount ? 'hide' :''}" href="javascript:">${pageNumber+1}</a>
				<a data-role="page"  data-page-value="${pageNumber+2}" class="${(pageNumber+2)>pageCount ? 'hide' :''}" href="javascript:">${pageNumber+2}</a>
				<a class="next ${(pageNumber+1)<=pageCount?'':'disabled'}" href="javascript:">下一页>></a>`
				$('.page-container').html(html)
			})

			//改变小箭头 ???
			let _len=$('.show-all>span:first-child~span:not(:last-child)').length
			console.log($('.show-all>span:first-child~span:not(:last-child)'));
			if(_len>0){
				$('[data-select=show-all]').children('img').show()
			}else{
				$('[data-select=show-all]').children('img').hide()
			}
		}

		getList(queryString)

		function deleteKeyWord(str){
			let start=queryString.indexOf(str)
			let end=queryString.indexOf('&',start)
			if(start>-1){
				let arr=queryString.split('')
				arr.splice(start,end-start+1)
				queryString=arr.join('')
			}
		}



		//page
		$('.page-container').on('click','[data-role=page]',function (e) {
			e.preventDefault()
			pageNumber=$(this).data('pageValue')
            deleteKeyWord('pageNumber')
			queryString+=`pageNumber=${pageNumber}&`
            getList(queryString)
        })

        $('.page-container').on('click','.prev',function (e) {
            e.preventDefault()
			if(pageNumber>1){
                pageNumber--
                deleteKeyWord('pageNumber')
                queryString+=`pageNumber=${pageNumber}&`
                getList(queryString)
			}

        })

        $('.page-container').on('click','.next',function (e) {
            e.preventDefault()
            if(pageNumber<pageCount){
            	pageNumber++
				deleteKeyWord('pageNumber')
				queryString+=`pageNumber=${pageNumber}&`
				getList(queryString)
            }
        })


		//sort search

		$('[data-select=show-all]').click(function () {
			$(this).children('img').hide()
			$(this).siblings('span:not(:last-child)').remove()
			$('.sort>div').show()
			queryString=`?pageNumber=${pageNumber}&pageSize=${pageSize}&kw=&`
			deleteKeyWord('pageNumber')
			pageNumber=1
			queryString+=`pageNumber=1&`
			getList(queryString)
			$('[data-select=show-all]').children('img').hide()
			$('.sort-item>span').removeClass('checked')
			$('.ok').removeClass('check')
			$('.sort>div').removeClass('active')
			connection=" ", connectionM=null,color=" ", colorM=null,
				wear=" ", wearM=null,microphone=" ", microphoneM=null,
				foldable=" ",foldableM=null,priceRange=" ",priceRangeM=null
		})

		$('[data-select=wear]').on('click', 'span', e=> {
			if(!wearM){
				let $tar = $(e.target)
				wear = $tar.html().slice(0,-8)
				$tar.parent().parent().hide()
				queryString += `wear=${wear}&`
				deleteKeyWord('pageNumber')
				pageNumber=1
				queryString+=`pageNumber=1&`
				getList(queryString)
				$('[data-select=show-all]').children('img').show()
				$('.show-all>span:last-child').before(`<span data-sort="single" data-cancel="wear">佩戴方式:${$tar.html().slice(0,-8)}<b>x</b></span>`)
			}
		})

		$('[data-select=connection]').on('click', 'span', e=> {
			if(!connectionM){
				let $tar = $(e.target)
				$tar.parent().parent().hide()
				connection = $tar.html().slice(0,-8)
				queryString += `connection=${connection}&`
				deleteKeyWord('pageNumber')
				pageNumber=1
				queryString+=`pageNumber=1&`
				getList(queryString)
				$('[data-select=show-all]').children('img').show()
				$('.show-all>span:last-child').before(`<span data-sort="single"  data-cancel="connection">连接方式:${$tar.html().slice(0,-8)}<b>x</b></span>`)
			}
		})

		$('[data-select=color]').on('click', 'span', e=> {
			if(!colorM){
				e.stopPropagation();
				let $tar = $(e.target),
					color = $tar.html().slice(0,-8)
				$tar.parent().parent().hide()
				queryString += `color=${color}&`
				deleteKeyWord('pageNumber')
				pageNumber=1
				queryString+=`pageNumber=1&`
				getList(queryString)
				$('[data-select=show-all]').children('img').show()
				$('.show-all>span:last-child').before(`<span data-sort="single"  data-cancel="color">产品颜色:${$tar.html().slice(0,-8)}<b>x</b></span>`)
			}
		})

		$('[data-select=microphone]').on('click','span', e=> {
			if(!microphoneM){
				let $tar = $(e.target)
				microphone = $tar.html().slice(0,-8)
				$tar.parent().parent().hide()
				queryString += `microphone=${microphone}&`
				deleteKeyWord('pageNumber')
				pageNumber=1
				queryString+=`pageNumber=1&`
				getList(queryString)
				$('[data-select=show-all]').children('img').show()
				$('.show-all>span:last-child').before(`<span data-sort="single"  data-cancel="microphone">通讯配置:${$tar.html().slice(0,-8)}<b>x</b></span>`)
			}
		})

		$('[data-select=foldable]').on('click','span', e=> {
			if(!foldableM){
				let $tar = $(e.target)
				foldable = $tar.html().slice(0,-8)
				$tar.parent().parent().hide()
				queryString += `foldable=${foldable}&`
				deleteKeyWord('pageNumber')
				pageNumber=1
				queryString+=`pageNumber=1&`
				getList(queryString)
				$('[data-select=show-all]').children('img').show()
				$('.show-all>span:last-child').before(`<span data-sort="single"  data-cancel="foldable">便携设计:${$tar.html().slice(0,-8)}<b>x</b></span>`)
			}
		})

		$('[data-select=priceRange]').on('click','span', e=> {
			if(!priceRangeM){
				let $tar = $(e.target)
				priceRange = $tar.html().slice(0,-8)
				$tar.parent().parent().hide()
				queryString += `priceRange=${priceRange}&`
				deleteKeyWord('pageNumber')
				pageNumber=1
				queryString+=`pageNumber=1&`
				getList(queryString)
				$('[data-select=show-all]').children('img').show()
				$('.show-all>span:last-child').before(`<span data-sort="single"  data-cancel="priceRange">价格区间:${$tar.html().slice(0,-8)}<b>x</b></span>`)
			}
		})
		//取消单项搜索
		$('.show-all').on('click','[data-sort=single]',function(e){
			$(this).remove()
			let data=$(this).data('cancel')
			$(`[data-select=${data}]`).parent().show()
			let start=queryString.indexOf(data)
			let end=queryString.indexOf('&',start)
			let arr=queryString.split('')
			arr.splice(start,end-start+1)
			queryString=arr.join('')
            deleteKeyWord('pageNumber')
            pageNumber=1
            queryString+=`pageNumber=1&`
			getList(queryString)
			if($('.show-all').children().length==2){
				$('[data-select=show-all]').children('img').hide()
			}
		})

		$('[data-sort=saleCount]').click(()=>{
			if(saleCountClicked==0){
				saleCountClicked=-1
				queryString+=`saleCount=${saleCountClicked}&`
				if(priceClicked!=0){
					deleteKeyWord('price=')
					queryString+=`price=${priceClicked}&`
				}
				getList(queryString)
				$('[data-sort=saleCount] .desc').css('border-bottom','5px solid #806F66')
				$('[data-sort=saleCount] .asc').css('border-top','5px solid #0096D6')
				$('[data-sort=saleCount]>span:first-child').css('color','#0096D6')
				return
			}
			if(saleCountClicked==-1){
				deleteKeyWord('saleCount')
				saleCountClicked=1
				queryString+=`saleCount=${saleCountClicked}&`
				if(priceClicked!=0&&(queryString.indexOf('price=')==-1)){
					queryString+=`price=${priceClicked}&`
				}
				getList(queryString)
				$('[data-sort=saleCount] .desc').css('border-bottom','5px solid #0096D6')
				$('[data-sort=saleCount] .asc').css('border-top','5px solid #806F66')
				return
			}
			if(saleCountClicked==1){
				saleCountClicked=0
				deleteKeyWord('saleCount')
				if(priceClicked!=0&&(queryString.indexOf('price=')==-1)){
					queryString+=`price=${priceClicked}&`
				}
				getList(queryString)
				$('[data-sort=saleCount] .desc').css('border-bottom','5px solid #806F66')
				$('[data-sort=saleCount] .asc').css('border-top','5px solid #806F66')
				$('[data-sort=saleCount]>span:first-child').css('color','#806F66')
				return
			}
		})


		$('[data-sort=price]').click(()=>{
			if(priceClicked==0){
				priceClicked=1
				queryString+=`price=${priceClicked}&`
				if(saleCountClicked!=0){
					deleteKeyWord('saleCount')
					queryString+=`saleCount=${saleCountClicked}&`
				}
				getList(queryString)
				$('[data-sort=price] .desc').css('border-bottom','5px solid #0096D6')
				$('[data-sort=price] .asc').css('border-top','5px solid #806F66')
				$('[data-sort=price]>span:first-child').css('color','#0096D6')
				return
			}
			if(priceClicked==1){
				deleteKeyWord('price=')
				priceClicked=-1
				queryString+=`price=${priceClicked}&`
				if(saleCountClicked!=0&&(queryString.indexOf('saleCount')==-1)){
					queryString+=`saleCount=${saleCountClicked}&`
				}
				getList(queryString)
				$('[data-sort=price] .desc').css('border-bottom','5px solid #806F66')
				$('[data-sort=price] .asc').css('border-top','5px solid #0096D6')
				return
			}
			if(priceClicked==-1){
				priceClicked=0
				deleteKeyWord('price=')
				if(saleCountClicked!=0&&(queryString.indexOf('saleCount')==-1)){
					queryString+=`saleCount=${saleCountClicked}&`
				}
				getList(queryString)
				$('[data-sort=price] .desc').css('border-bottom','5px solid #806F66')
				$('[data-sort=price] .asc').css('border-top','5px solid #806F66')
				$('[data-sort=price]>span:first-child').css('color','#806F66')
				return
			}
		})

		$('[data-sort=default]').click(()=>{
			priceClicked=0
			deleteKeyWord('price=')
			saleCountClicked=0
			deleteKeyWord('saleCount')
			$('[data-sort=saleCount] .desc').css('border-bottom','5px solid #806F66')
			$('[data-sort=saleCount] .asc').css('border-top','5px solid #806F66')
			$('[data-sort=price] .desc').css('border-bottom','5px solid #806F66')
			$('[data-sort=price] .asc').css('border-top','5px solid #806F66')
			$('[data-sort=price]>span:first-child').css('color','#806F66')
			$('[data-sort=saleCount]>span:first-child').css('color','#806F66')
			getList(queryString)
		})

		//multiple select
		//显示多选下拉菜单 并改变是否可多选
		$('.list').on('click','[data-sort=connection]>.sort-multiple',function(){
			let $this=$(this)
			$this.parent().toggleClass('active')
			connectionM=true
		})
		$('.list').on('click','[data-sort=wear]>.sort-multiple',function(){
			let $this=$(this)
			$this.parent().toggleClass('active')
			wearM=true
		})
		$('.list').on('click','[data-sort=color]>.sort-multiple',function(){
			let $this=$(this)
			$this.parent().toggleClass('active')
			colorM=true
		})
		$('.list').on('click','[data-sort=microphone]>.sort-multiple',function(){
			let $this=$(this)
			$this.parent().toggleClass('active')
			microphoneM=true
		})
		$('.list').on('click','[data-sort=foldable]>.sort-multiple',function(){
			let $this=$(this)
			$this.parent().toggleClass('active')
			foldableM=true
		})
		$('.list').on('click','[data-sort=priceRange]>.sort-multiple',function(){
			let $this=$(this)
			$this.parent().toggleClass('active')
			priceRangeM=true
		})
		//隐藏多选下拉菜单 改变是否可多选 清空关联的kw 改变 关联的! 确认按钮状态
		$('.list').on('click','[data-sort=connection]>.confirm>.cancel',function(){
			let $this=$(this)
			connectionM=null
			for(let v of $this.parent().siblings('.sort-item').children('.checked')){
						let $v=$(v)
						let	searchText=$v.html().slice(0,-8)
						let index=kw.indexOf(searchText)
						let ln=searchText.length
						let arr=kw.split('')
						arr.splice(index,index+ln+1)
						kw=arr.join('')
						$v.removeClass('checked')
						console.log(kw)
					}
			$this.parent().parent().toggleClass('active')
			$this.siblings('.ok').removeClass('check')
		})

		$('.list').on('click','[data-sort=wear]>.confirm>.cancel',function(){
			let $this=$(this)
			wearM=null
			for(let v of $this.parent().siblings('.sort-item').children('.checked')){
				let $v=$(v)
				let	searchText=$v.html().slice(0,-8)
				let index=kw.indexOf(searchText)
				let ln=searchText.length
				let arr=kw.split('')
				arr.splice(index,index+ln+1)
				kw=arr.join('')
				$v.removeClass('checked')
				console.log(kw)
			}
			$this.parent().parent().toggleClass('active')
			$this.siblings('.ok').removeClass('check')
		})

		$('.list').on('click','[data-sort=color]>.confirm>.cancel',function(){
			let $this=$(this)
			colorM=null
			for(let v of $this.parent().siblings('.sort-item').children('.checked')){
				let $v=$(v)
				let	searchText=$v.html().slice(0,-8)
				let index=kw.indexOf(searchText)
				let ln=searchText.length
				let arr=kw.split('')
				arr.splice(index,index+ln+1)
				kw=arr.join('')
				$v.removeClass('checked')
				console.log(kw)
			}
			$this.parent().parent().toggleClass('active')
			$this.siblings('.ok').removeClass('check')
		})

		$('.list').on('click','[data-sort=microphone]>.confirm>.cancel',function(){
			let $this=$(this)
			microphoneM=null
			for(let v of $this.parent().siblings('.sort-item').children('.checked')){
				let $v=$(v)
				let	searchText=$v.html().slice(0,-8)
				let index=kw.indexOf(searchText)
				let ln=searchText.length
				let arr=kw.split('')
				arr.splice(index,index+ln+1)
				kw=arr.join('')
				$v.removeClass('checked')
				console.log(kw)
			}
			$this.parent().parent().toggleClass('active')
			$this.siblings('.ok').removeClass('check')
		})

		$('.list').on('click','[data-sort=foldable]>.confirm>.cancel',function(){
			let $this=$(this)
			foldableM=null
			for(let v of $this.parent().siblings('.sort-item').children('.checked')){
				let $v=$(v)
				let	searchText=$v.html().slice(0,-8)
				let index=kw.indexOf(searchText)
				let ln=searchText.length
				let arr=kw.split('')
				arr.splice(index,index+ln+1)
				kw=arr.join('')
				$v.removeClass('checked')
				console.log(kw)
			}
			$this.parent().parent().toggleClass('active')
			$this.siblings('.ok').removeClass('check')
		})

		$('.list').on('click','[data-sort=priceRange]>.confirm>.cancel',function(){
			let $this=$(this)
			priceRangeM=null
			for(let v of $this.parent().siblings('.sort-item').children('.checked')){
				let $v=$(v)
				let	searchText=$v.html().slice(0,-8)
				let index=kw.indexOf(searchText)
				let ln=searchText.length
				let arr=kw.split('')
				arr.splice(index,index+ln+1)
				kw=arr.join('')
				$v.removeClass('checked')
				console.log(kw)
			}
			$this.parent().parent().toggleClass('active')
			$this.siblings('.ok').removeClass('check')
		})
		//function hideMenue(kwM){
		//	let $this=$(this)
		//	kwM=null
		//	for(let v of $this.parent().siblings('.sort-item').children('.checked')){
		//		let $v=$(v)
		//		let	searchText=$v.html().slice(0,-8)
		//		let index=kw.indexOf(searchText)
		//		let ln=searchText.length
		//		let arr=kw.split('')
		//		arr.splice(index,index+ln+1)
		//		kw=arr.join('')
		//		$v.removeClass('checked')
		//		console.log(kw)
		//	}
		//	$this.parent().parent().toggleClass('active')
		//	$this.siblings('.ok').removeClass('check')
		//}
		//
		//$('.list').on('click','[data-sort=wear]>.confirm>.cancel',hideMenue(wearM))  !why err


		//改变多选关键字  并改变 关联的! 确认按钮状态
		$('.list').on('click','.active>.sort-item>span',function(){
			let $this=$(this)
			$this.toggleClass('checked')
			let searchText=$this.html().slice(0,-8)
			let index=kw.indexOf(searchText),
				ln=searchText.length
			if(index==-1){
				kw+=searchText+' '
			}else{
				let arr=kw.split('')
				arr.splice(index,index+ln+1)
				kw=arr.join('')
			}
			if($this.parent().children('.checked').length>0){
				$this.parent().siblings('.confirm').children('.ok').addClass('check')
			}else{
				$this.parent().siblings('.confirm').children('.ok').removeClass('check')
			}
		})
		//点击确认 添加到顶部 隐藏该行 移除check  移除该行active  搜索
		$('.list').on('click','.active>.confirm>span.check',function(){
			let $this=$(this)
			let sort=$this.parent().parent().data('sort')
			let text=$this.parent().parent().data('sortText')
			let _text=$this.parent().siblings('.sort-item').children('.checked')[0].innerHTML.slice(0,-8)
			if($this.parent().siblings('.sort-item').children('.checked').length>1){
					_text+='...'
			}
			_text+='<b>x</b>'
			$('.show-all>span:last-child').before(`<span data-cancel-sort=${sort} data-cancel="kw">${text}:${_text}</span>`)
			$this.parent().parent().removeClass('active').hide()
			deleteKeyWord('kw')
			queryString+='kw='+kw+'&'
			getList(queryString)
			$this.removeClass('check')
		})
		//点击  清除kw 显示对应的行 执行查询 让对应复选为null
		$('.list').on('click','[data-cancel-sort=connection]',function(){
			connectionM=null
			let $this=$(this)
			let sort=$this.data('cancelSort')
			$(`[data-sort=${sort}]`).show()
			$this.remove()
			for(let v of $(`[data-sort=${sort}]`).children('.sort-item').children('.checked')){
				let $v=$(v)
				let	searchText=$v.html().slice(0,-8)
				let index=kw.indexOf(searchText)
				let ln=searchText.length
				let arr=kw.split('')
				arr.splice(index,index+ln)
				kw=arr.join('')
			}
			$(`[data-sort=${sort}]`).children('.sort-item').children('.checked').removeClass('checked')
			deleteKeyWord('kw')
			queryString+='kw='+kw+'&'
			getList(queryString)
		})

		$('.list').on('click','[data-cancel-sort=wear]',function(){
			wearM=null
			let $this=$(this)
			let sort=$this.data('cancelSort')
			$(`[data-sort=${sort}]`).show()
			$this.remove()
			for(let v of $(`[data-sort=${sort}]`).children('.sort-item').children('.checked')){
				let $v=$(v)
				let	searchText=$v.html().slice(0,-8)
				let index=kw.indexOf(searchText)
				let ln=searchText.length
				let arr=kw.split('')
				arr.splice(index,index+ln)
				kw=arr.join('')
				$v.removeClass('checked')
			}
			$(`[data-sort=${sort}]`).children('.sort-item').children('.checked').removeClass('checked')
			deleteKeyWord('kw')
			queryString+='kw='+kw+'&'
			getList(queryString)
		})

		$('.list').on('click','[data-cancel-sort=color]',function(){
			colorM=null
			let $this=$(this)
			let sort=$this.data('cancelSort')
			$(`[data-sort=${sort}]`).show()
			$this.remove()
			for(let v of $(`[data-sort=${sort}]`).children('.sort-item').children('.checked')){
				let $v=$(v)
				let	searchText=$v.html().slice(0,-8)
				let index=kw.indexOf(searchText)
				let ln=searchText.length
				let arr=kw.split('')
				arr.splice(index,index+ln)
				kw=arr.join('')
				$v.removeClass('checked')
			}
			$(`[data-sort=${sort}]`).children('.sort-item').children('.checked').removeClass('checked')
			deleteKeyWord('kw')
			queryString+='kw='+kw+'&'
			getList(queryString)
		})

		$('.list').on('click','[data-cancel-sort=microphone]',function(){
			microphoneM=null
			let $this=$(this)
			let sort=$this.data('cancelSort')
			$(`[data-sort=${sort}]`).show()
			$this.remove()
			for(let v of $(`[data-sort=${sort}]`).children('.sort-item').children('.checked')){
				let $v=$(v)
				let	searchText=$v.html().slice(0,-8)
				let index=kw.indexOf(searchText)
				let ln=searchText.length
				let arr=kw.split('')
				arr.splice(index,index+ln)
				kw=arr.join('')
				$v.removeClass('checked')
			}
			$(`[data-sort=${sort}]`).children('.sort-item').children('.checked').removeClass('checked')
			deleteKeyWord('kw')
			queryString+='kw='+kw+'&'
			getList(queryString)
		})

		$('.list').on('click','[data-cancel-sort=foldable]',function(){
			foldableM=null
			let $this=$(this)
			let sort=$this.data('cancelSort')
			$(`[data-sort=${sort}]`).show()
			$this.remove()
			for(let v of $(`[data-sort=${sort}]`).children('.sort-item').children('.checked')){
				let $v=$(v)
				let	searchText=$v.html().slice(0,-8)
				let index=kw.indexOf(searchText)
				let ln=searchText.length
				let arr=kw.split('')
				arr.splice(index,index+ln)
				kw=arr.join('')
				$v.removeClass('checked')
			}
			$(`[data-sort=${sort}]`).children('.sort-item').children('.checked').removeClass('checked')
			deleteKeyWord('kw')
			queryString+='kw='+kw+'&'
			getList(queryString)
		})

		$('.list').on('click','[data-cancel-sort=priceRange]',function(){
			priceRangeM=null
			let $this=$(this)
			let sort=$this.data('cancelSort')
			$(`[data-sort=${sort}]`).show()
			$this.remove()
			for(let v of $(`[data-sort=${sort}]`).children('.sort-item').children('.checked')){
				let $v=$(v)
				let	searchText=$v.html().slice(0,-8)
				let index=kw.indexOf(searchText)
				let ln=searchText.length
				let arr=kw.split('')
				arr.splice(index,index+ln)
				kw=arr.join('')
				$v.removeClass('checked')
			}
			$(`[data-sort=${sort}]`).children('.sort-item').children('.checked').removeClass('checked')
			deleteKeyWord('kw')
			queryString+='kw='+kw+'&'
			getList(queryString)
		})

})()
)
