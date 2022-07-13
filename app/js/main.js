$(function(){

    $('.delivery__slider-item').on('click', function(){
        if(!$(this).hasClass('active')){
            $('.delivery__slider').find('.active').removeClass('active');
            $(this).addClass('active');
        }
    });
    $('.delivery__date-item').on('click', function(){
        if(!$(this).hasClass('active')){
            $('.delivery__date-box').find('.active').removeClass('active');
            $(this).addClass('active');
        }
    });

    $('.content').css({
        'paddingBottom': $('.checkout__footer').outerHeight()
    });

    const windowInnerWidth = document.documentElement.clientWidth;
    if(windowInnerWidth <= 400){
        $(".checkout__total-price__text").html("К оплате:");
        // $('.checkout__order-info').append('<div class="order-info__summary mobile"><div class="order-info__summary-item"><div class="summary-item__text">К оплате:</div><div class="summary-item__info"><span>21 072</span> ₽</div></div></div><div class="checkout__btn checkout__order-info__btn">Закрыть подробности</div>');
    }
    if(windowInnerWidth <= 400){
        $('.delivery__slider').slick({
            arrows: false,
            dots: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false,
            variableWidth: true

        });
    }
    else{
        $('.delivery__slider').slick({
            arrows: true,
            dots: false,
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: false
        });
    }
    $('.total-price__details').on('click', function(){
        $('.checkout__order-info').slideToggle()
    });
    $('.checkout__order-info__btn').on('click', function(){
        $('.checkout__order-info').slideToggle()
    });
});