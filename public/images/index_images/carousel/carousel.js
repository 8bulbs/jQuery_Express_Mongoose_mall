$( ()=>{
        let left=$('.carousel_container').css('left')
        let translate=left
        let moved=0
        const width=1920
        let timer=setInterval(carousel,3000)
        function carousel(){
            if(moved>=4){
                moved=0;
                $('.carousel_container').css('left',left)
            }
            moved++
            translate=-moved*width
            $('.carousel_container').animate({'left':translate+'px'},500,'linear')
            $(`.carousel_controler>div:nth-child(${moved+1})`)
                .addClass('current').siblings().removeClass('current')
            if(moved>=4){
              $('.carousel_controler>div:first-child')
                .addClass('current').siblings().removeClass('current')
            }
        }
        $('.carousel_controler>div').hover(
          function(){
            clearInterval(timer)
            moved=$(this).index()-1
            carousel()
          },
          function(){
            timer=setInterval(carousel,3000)
          }
        )
    }
)
