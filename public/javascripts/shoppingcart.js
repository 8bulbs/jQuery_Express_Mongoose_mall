$((()=>{
		let checkAll=null
    function getCart(){
        $.get('/users/getCart').then(res=>{
            let html='',sum=0,selectAll=1,totalCount=0
            for(var val of res){
	            if(val.checked==0){
		            selectAll=0
	            }
                html+=`<tr data-cartCount="${val.cartCount}"  data-productId="${val.productId}" data-checked="${val.checked}">
													<td>
														<img src="${val.checked == 1 ? 'images/base_images/icon-check-ok.png' : 'images/base_images/icon-check-no.png'}" alt=""/>
													</td>
													<td>
														<a href="/details?productId=${val.productId}">
															<img src=${val.images[0]} alt=""/>
														</a>
														<span>
															<a href="">${val.productTitle}</a>
														</span>
													</td>
													<td>
														<span>¥${val.price}.00</span>
													</td>
													<td>
														<div class="add_minus">
															<span class="minus">-</span>
															<input data-input="count" value=${val.cartCount} type="text"/>
															<span class="add">+</span>
														</div>
													</td>
													<td>
														<span>¥${val.price*val.cartCount}.00</span>
													</td>
													<td>
														<a href="javascript:">
															<img src="images/base_images/icon-delete.png" alt=""/>
															<span>删除</span>
														</a>
													</td>
											</tr>`
				if(val.checked == 1){
					sum+=val.price*val.cartCount
				}							
                
	              totalCount+=parseInt(val.cartCount)
            }
	          $('.shopping-cart-total-count').html(totalCount)
						checkAll=selectAll
            $('tbody').html(html)
            $('.total-box-right>span:nth-child(3)').html(`${sum}.00`)
	          $('[data-select=all]').children('img').attr('src',`${selectAll== 1? 'images/base_images/icon-check-ok.png' : 'images/base_images/icon-check-no.png' }`)
        })
    }

    //render cart
    getCart()
    //deleteOneItem
    $('.shoppingcart').on('click','tbody>tr>td:last-child>a',function(e){
        e.preventDefault()
        let $this=$(this),
            productId=$this.parent().parent().data('productid')
        $.get(`users/deleteOneItem?productId=${productId}`)
            .then(()=>{
                getCart()
             })
    })
    //update one item
    $('.shoppingcart').on('click','.add_minus>span',function(e){
        let $tar=$(e.target),
            $this=$(this),
            productId=$this.parent().parent().parent().data('productid'),
            cartCount=$this.parent().children('input').val(),
            checked=$this.parent().parent().parent().data('checked')
        if($tar.html()=='-'){
            if(cartCount>=2){
                cartCount--
            }else{
                $this.parent().parent().siblings('td:last-child').children('a').trigger('click')
            }
        }
        if($tar.html()=='+'){
            cartCount++
        }
	    console.log(cartCount);
	    $.post('users/addToCart',{productId,cartCount,checked})
            .then(()=>{
                 getCart()
             })
    })

    $('.shoppingcart').on('blur','.add_minus>input',function(e){
        let $tar=$(e.target),
            $this=$(this),
            productId=$this.parent().parent().parent().data('productid'),
            cartCount=$this.val(),
            checked=$this.parent().parent().parent().data('checked')
        if(cartCount==0){
            $this.parent().parent().siblings('td:last-child').children('a').trigger('click')
        }else{
            $.post('users/addToCart',{productId,cartCount,checked})
                .then(()=>{
                    getCart()
                })
        }
    })
		//delete all
		$('.shoppingcart').on('click','[data-delete=all]',()=>{
			console.log(1);
			$.get('/users/deleteAll')
				.then(res=>{
					console.log(res)
					getCart()
				})
		})
		//change checked
		$('.shoppingcart').on('click','td:first-child>img',function(){
			let $this=$(this),
					productId=$this.parent().parent().data('productid'),
					cartCount=$this.parent().parent().data('cartcount'),
					checked=$this.parent().parent().data('checked')
			checked= checked == 1 ? 0 : 1
			$.post('users/addToCart',{productId,cartCount,checked})
				.then(()=>{
					getCart()
				})
		})
		//select all
		$('.shoppingcart').on('click','[data-select=all]',()=>{
			let checked= checkAll==1 ? 0 : 1
 			$.post('users/selectAll',{checked})
				.then(res=>{
				  getCart()
			  })
				.catch(err=>{
				  console.log(err)
			  })
		})
		//delete some  why trigger deleteOneItem not work well  Asy?
		$('.shoppingcart').on('click','[data-delete=some]',()=>{
			str=''
			for(let val of $('[data-checked=1]')){
				let productId=$(val).data('productid')
				str+=' '+productId
			}
			$.get('/users/deleteSome?products='+str).then(res=>{
				if(res.ok==1){
					getCart()
				}
			})
		})
})())
















