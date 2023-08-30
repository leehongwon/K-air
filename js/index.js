// content 아코디언
$(function(){
    $('.accordion li').mouseover(function(){
        $('.content').addClass('on')
    })
    $('.accordion li').mouseleave(function(){
        $('.content').removeClass('on')
    })
})

$(function(){
    var list = $('.accordion .accordion-list a');
    list.click(function(){
        list.next().slideUp();
        list.removeClass('arrowActive')

        if(!$(this).next().is(":visible")){
            $(this).next().slideDown()
            $(this).addClass('arrowActive')
        }
    })
})

// company 아코디언
$(function(){
    var list = $('footer .company .c-inner .f-depth1 .f-depth1-1 h2');
    list.click(function(){
        list.next().slideUp();
        list.removeClass('arrow_active')

        if(!$(this).next().is(":visible")){
            $(this).next().slideDown()
            $(this).addClass('arrow_active')
        }
    })
})




// go-top 버튼
$(function(){
    $('.go-top').hide();

    $(window).scroll(function(){
        if($(this).scrollTop() >=400) {
            $('.go-top').fadeIn();
        }else {
            $('.go-top').fadeOut();
        }
    })

    $('.go-top').click(function(e){
        e.preventDefault();
        $('html,body').stop().animate({
            scrollTop : 0
        });
    })
})


// floating-btn 토글
$(function(){
    $('.press').click(function(){
        $('.floating-btn-wrap .expand-btn').toggleClass('active')
    })
})

