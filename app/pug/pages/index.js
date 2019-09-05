$(function(){
    $('.works-carousel').owlCarousel({
        loop:true,
        dots: false,
        margin:30,
        nav:true,
        startPosition: 1,
        navText: ["<img src= \"/img/left.svg\">", "<img src= \"/img/right.svg\">"],
        responsive:{
            0:{
                items:1
            }
        }
    });

    $('.contrib-carousel').owlCarousel({
        loop:true,
        dots: false,
        margin:0,
        nav:true,
        navText: ["<img src= \"/img/left.svg\">", "<img src= \"/img/right.svg\">"],
        responsive:{
            0:{
                items:1
            }
        }
    });

    $('.work-tabs').on('click', '.work-tabs__item a', function (e) {
        e.preventDefault();

        var $this = $(this),
        id = $this.attr('href');
        console.log(id);
        $('.work-tabs .active').removeClass('active');
        $('.tabs-content .active').removeClass('active');
    
        $(this).closest('li').addClass('active');
        $(id).addClass('active');
    });
});