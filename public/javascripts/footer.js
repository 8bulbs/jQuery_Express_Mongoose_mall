$(
	$.ajax({url:'/html_template/footer_template.html'})
		.then(res=>{
			$('footer').html(res)
		})
)
