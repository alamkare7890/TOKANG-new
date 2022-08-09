var myToggle = document.getElementById('toggleNav');

    toggleNav.onclick = function () {

    toggleNav.classList.toggle('active');
    
}
$(document).ready(function () {

    $('#toggleNav').click(function () {

        $('#navOpen').addClass('slide-nav');
    
    })
    $('#navClose').click(function () {
    
        $('#navOpen').removeClass('slide-nav');
    
    })

    /*======hero-slider========*/
    $('.hero-slide').slick({
        prevArrow:'<button class="slide-left" type="button" class="slick-next"><i class="fas fa-angle-right"></i></button>',
        nextArrow: '<button class="slide-right" type="button" class= "slick-prev" > <i class="fas fa-angle-left"></i></button> ',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    arrows: false,
                    speed: 300,
                    fade: true,
                    cssEase: 'linear',
                    autoPlay: true,
                    autoplaySpeed: 300,
                    dots: true,
                }
            
            
            }
        
        
        ]
    })

    /*=========nav-scrolling============*/

    $(window).bind('scroll', function () {
        $a = 50;
        if ($(window).scrollTop() > $a) {
            $('#navScroll').addClass('nav-scroll');
            $('#brand').addClass('fill');
            $('a').addClass('black');
            $('.ham-menu').addClass('bg-color');
        }
        else {
            $('#navScroll').removeClass('nav-scroll');
            $('#brand').removeClass('fill');
            $('a').removeClass('black');
            $('.ham-menu').removeClass('bg-color');
            
            
        }
        
    
    });
    
    /*===========counter-up=============
    $('.counter').counterUp({
        time: 1000,
        delay: 10,        
    
    })*/
    /*===============person-slide========*/
    $('.testi-slide').slick({
        slidesToShow: 2,   
        slidesToScroll: 2,
        arrows: false,
        autoPlay: true,
        autoplaySpeed: 500,
        
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToScroll: 1,
                    slidesToShow: 1,
                }
        
            
            },
        ]
      

    }) 
    /*===============partner-slide========*/
    $('.partner-slide').slick({
        slidesToScroll: 5,
        slidesToShow: 5,
        arrows:false,
        autoPlay: true,
        autoplaySpeed: 500, 
        infinite: true,

        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToScroll: 3,
                    slidesToShow: 3,
                    
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToScroll: 2,
                    slidesToShow: 2,
                }
            
            }
        ]

    })
    
    /*================Service-slide==============*/
    $('.service-slide').slick({
    
        slidesToScroll: 1,
        slidesToShow: 2,

        prevArrow: "<button type='button' class='slick-prev'><i class='fas arrow-left'></i></button>",    
        nextArrow: "<button type='button' class='slick-next'><i class='fas arrow-right'></i></button>",
        arrows: false,
        
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToScroll: 1,
                    slidesToShow: 1,
                
                }
            
            
            }
        
        
        ]
        
    })
    
    /*==============counter================*/
    var a = 0;
    $(window).scroll(function() {

        var oTop = $('#numCounter').offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > oTop) {
            $('.counter').each(function() {
            var $this = $(this),
                countTo = $this.attr('data-count');
                $({
                    countNum: $this.text()
                }).animate({
                    countNum: countTo
            },
                {

                duration: 2000,
                easing: 'swing',
                step: function() {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function() {
                    $this.text(this.countNum);
                    //alert('finished');
                }

                });
            });
            a = 1;
        }

    });
    
    
})