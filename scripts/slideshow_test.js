$(document).ready(function(){
    $('.slider').bxSlider( {
        preloadImages :         'all', //preload images
        randomStart :           true, //random starting slide
        auto :                  true, //infinite transitions
        setInterval :           2000, // 2 seconds
        mode:                   'vertical', //slide up
        touchEnabled :          false,
        autoHover :             true, //if user hovers over slide, pause
        wrapperClass :          'bx-wrapper',
        slideWidth :            250

    });
    


  });