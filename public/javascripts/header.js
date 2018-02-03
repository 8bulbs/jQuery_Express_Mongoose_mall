+function loadHeader() {
    $.ajax({url:'/html_template/header_template.html'})
        .then(res=>{
            $('header').html(res)
            $.get('/users/isLogin').then(res=>{
                if(res.ok==1){
                    $('.login_or_register').hide()
                    $('.uname').html(res.msg)
                    $('.welcome').show()
	                  $.get('/users/getCart').then(res=>{
		                  console.log(res);
		                  let sum=0
		                  for(var v of res){
			                  sum+=v.cartCount
		                  }
		                  $('.shopping-cart-total-count').html(sum)
	                  })
                }else{
                    $('.login_or_register').show()
                    $('.welcome').hide()
                }
            })

            $(
                ()=>{
                    //Modal management
                    video.pause()
                    let $dialog=$('.modal_container')
                    let $loginDialog=$('.modal_dialog_login')
                    let $registerDialog=$('.modal_dialog_register')
                    let validateName=false
                    let validatePassword=false
                    let validatePasswordRepeat=false

                    function showDialog(){
	                      let height=innerHeight
                        $dialog.addClass('show').css('height',height).css('position','fixed')
                        video.play()
                    }
                    function hideDialog(){
                        $dialog.removeClass('show')
                        $('body').removeClass('full_screen')
                        video.pause()
                    }
                    $('.login').click(e=>{
                        e.preventDefault()
                        showDialog()
                        $registerDialog.hide()
                        $loginDialog.show()
                    })
                    $('.returnIndex').click(()=>{
                        hideDialog()
                    })
                    $('.change_to_register').click(()=>{
                        $loginDialog.hide()
                        $registerDialog.show()
                    })
                    $('.change_to_login').click(()=>{
                        $registerDialog.hide()
                        $loginDialog.show()
                    })
                    $('.register').click(e=>{
                        e.preventDefault()
                        showDialog()
                        $loginDialog.hide()
                        $registerDialog.show()
                    })

	                  function login(){
		                  $.post('/users/login',$('.login_form').serialize())
			                  .then(res=>{
				                  if(res.ok==0){
					                  $($('.login-vali-tips')[0]).html(res.msg).css('color','red')
				                  }else{
					                  hideDialog()
					                  $('.login_or_register').hide()
					                  $('.uname').html(res.msg)
					                  $('.welcome').show()
					                  $.get('/users/getCart').then(res=>{
						                  console.log(res);
						                  let sum=0
						                  for(var v of res){
							                  sum+=v.cartCount
						                  }
						                  $('.shopping-cart-total-count').html(sum)
					                  })
				                  }
			                  })
	                  }
                    $('.submit_login').click(login)

										$('.login-userPassword').keyup(e=>{
											e.keyCode==13 && login()
										})

                    $('.submit_register').click(()=>{
                        let userName=$('.register-userName').val().trim().toLocaleLowerCase()
                        let userPassword=$('.register-userPassword').val().trim().toLocaleLowerCase()
                        if(validateName&&validatePassword&&validatePasswordRepeat){
                            $.post('/users/register',`userName=${userName}&userPassword=${userPassword}`)
                              .then(res=>{
                                  $('.login-userName').val($('.register-userName').val())
                                  $('.login-userPassword').val($('.register-userPassword').val())

                                  $('.register_vali_tips').html('注册成功!').css('color','green')
                                  $('.register-userName').val('')
                                  $('.register-userPassword').val('')
                                  $('.register-userPassword-repeat').val('')
                                  $('.userName_vali_tips').html('')
                                  $('.userPassword_vali_tips').html('')
                                  $('.userPassword_repeat_vali_tips').html('')
                              })
                        }else{
                            $('.register_vali_tips').html('请输入合法的用户名和密码').css('color','red')
                        }

                    })

                    $('.logout').click(()=>{
	                    $.get('/users/logout')
                          .then(res=>{
		                        location='/'
                          })
                    })
									$('.register-userName').click(()=>{
										$('.register-userName').blur(function(){
											let val=$(this).val().trim().toLocaleLowerCase()
											let reg=/^[a-zA-Z0-9.]{6,10}$/ig
											if(reg.test(val)){
												$.post('/users/validateName',`userName=${val}`)
													.then(res=>{
														if(res.ok==1){
															$('.register_form .userName_vali_tips').html(res.msg).css('color','green')
															validateName=true
														}else{
															$('.register_form .userName_vali_tips').html(res.msg).css('color','red')
															validateName=false
														}
													})
											}else{
												$('.register_form .userName_vali_tips').html('请输入格式正确的用户名').css('color','red')
												validateName=false
											}
										})
									})
									/*if($('.register-userName').length!=0){
										$('.register-userName').blur(function(){
											let val=$(this).val().trim().toLocaleLowerCase()
											let reg=/^[a-zA-Z0-9.]{6,10}$/ig
											if(reg.test(val)){
												$.post('/users/validateName',`userName=${val}`)
													.then(res=>{
														if(res.ok==1){
															$('.register_form .userName_vali_tips').html(res.msg).css('color','green')
															validateName=true
														}else{
															$('.register_form .userName_vali_tips').html(res.msg).css('color','red')
															validateName=false
														}
													})
											}else{
												$('.register_form .userName_vali_tips').html('请输入格式正确的用户名').css('color','red')
												validateName=false
											}
										})
									}*/
                    $('.register-userPassword').blur(function(){
                        let val=$(this).val().trim()
                        let reg=/^[a-zA-Z0-9]{6,8}$/ig
                        if(reg.test(val)){
                            $('.userPassword_vali_tips').html('密码格式正确').css('color','green')
                            validatePassword=true
                        }else{
                            $('.userPassword_vali_tips').html('密码格式错误').css('color','red')
                            validatePassword=false
                        }
                    })

                    $('.register-userPassword-repeat').blur(function(){
                        let val=$(this).val().trim()
                        let _val=$('.register-userPassword').val().trim()
                        if(val==_val){
                            $('.userPassword_repeat_vali_tips').html('两次密码输入一致').css('color','green')
                            validatePasswordRepeat=true
                        }else{
                            $('.userPassword_repeat_vali_tips').html('两次密码输入不一致').css('color','red')
                            validatePasswordRepeat=false
                        }
                    })

	                  $('.cart').click(e=>{
		                  e.preventDefault()
		                  $.get('/users/isLogin').then(res=>{
			                  if(res.ok==1){
				                  location='/shoppingCart'
			                  }else{
				                  $('.login').trigger('click')
			                  }
		                  })
	                  })

	                //add to cart

	                $('.goods-list').on('click','[data-role=addToCart]',function(e){
		                e.preventDefault()
		                let productId=$(this).data('productid')//toLowercase!
		                $.get('/users/isLogin').then(res=>{
			                if(res.ok==1){
				                $.post('/users/addToCart',{productId:productId,checked:1,cartCount:1}).then(res=>{
					                $.get('/users/getCart').then(res=>{
						                let sum=0
						                for(var v of res){
							                sum+=v.cartCount
						                }
						                $('.shopping-cart-total-count').html(sum)
					                })
					                let height=innerHeight
					                $('.add-to-cart-modal').css('visibility','visible').css('height',height).css('position','fixed')
													$('.add-to-cart-modal').on('click','[data-cart=continue]',()=>{
														$('.add-to-cart-modal').css('visibility','hidden')
													})
					                $('.add-to-cart-modal').on('click','[data-cart=go]',()=>{
						                location='/shoppingCart'
					                })
				                })
			                }else{
				                $('.login').trigger('click')
			                }
		                })
	                })

	                $('.addToCart').on('click',e=>{
		                e.preventDefault()
		                $.get('/users/isLogin').then(res=>{
			                if(res.ok==1){
				                let productId=location.href.split('=')[1],
					                  cartCount=parseInt($('.shopping-cart-total-count').html())
				                cartCount+=parseInt($('[data-count=count]').val())
				                $.post('/users/addToCart',{productId:productId,checked:1,cartCount:cartCount}).then(res=>{
					                $.get('/users/getCart').then(res=>{
						                let sum=0
						                for(var v of res){
							                sum+=v.cartCount
						                }
						                $('.shopping-cart-total-count').html(sum)
					                })
					                let height=innerHeight
					                $('.add-to-cart-modal').css('visibility','visible').css('height',height).css('position','fixed')
					                $('.add-to-cart-modal').on('click','[data-cart=continue]',()=>{
						                $('.add-to-cart-modal').css('visibility','hidden')
					                })
					                $('.add-to-cart-modal').on('click','[data-cart=go]',()=>{
						                location='/shoppingCart'
					                })
				                })
			                }else{
				                $('.login').trigger('click')
			                }
		                })
	                })


                })

		            //search help
		            let arr=['Momentum','URBANITE','PXC'],
			              i=0,
			              timer=setInterval(()=>{
				              i++
				              if(i==3){i=0}
				              $('[data-search=input]').attr('placeholder',`${arr[i]}`)
			              },5000)


		            $('.search').on('keyup','[data-search=input]',function(e){
			            let val=$(this).val().trim()
			            if(val.length>0){
				            $('.search-help').show()
				            $.get('users/search',{kw:val}).then(res=>{
					            let html=''
					            for(let i=0;i<res.length&&i<5;i++){
						            html+=`<li>${res[i].productTitle}</li>`
					            }
					            $('.search-help').html(html)
				            })
			            }else{
				            $('.search-help').html('')
			            }
			            if(e.keyCode=='13'&&val.length>0){
				            location=`/list?kw=${val}`
			            }
			            if(e.keyCode=='13'&&val.length==0){
				            val=$(this).attr('placeholder')
				            location=`/list?kw=${val}`
			            }
		            })

					$('.search').on('click','.search-help>li',function(){
						$('[data-search=input]').val($(this).html())
						$('[data-search=input]')[0].focus()
						$(this).parent().hide()
					})

		            $('.search').on('click','[data-img=clear]',()=>{
			            $('[data-search=input]').val('')
			            $('[data-search=input]').attr('placeholder','')
			            $('.search-help').html('')
		            })

		            $('.search').on('click','a',function(e){
			            e.preventDefault()
			            let val=$('[data-search=input]').val()
			            if(!val){
				            val=$('[data-search=input]').attr('placeholder')
			            }
			            location=`/list?kw=${val}`
		            })

		            if(location.href.split('kw=')[1]){
			            $('[data-search=input]').val(decodeURI(location.href.split('kw=')[1]))
		            }

		            $('.nav_content_left_list').on('click','a',function(e){
										e.preventDefault()
			              let kw=$(this).parent().parent().parent().parent().prev().children('span').html()
			              location='/list?kw='+kw
		            })

        })
}()


