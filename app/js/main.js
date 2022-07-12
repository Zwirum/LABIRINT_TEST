$(function(){
    $('input:checkbox').styler(); 
    $('.settings-recipient__info-select').styler(); 

    $('.delivery__slider').slick({
        arrows: true,
        dots: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false
    });
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
});