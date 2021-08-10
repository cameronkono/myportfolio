var bgHeight = 10000; // pixel height of background image

$(document).ready(function() {   
    $('body').height( bgHeight + $(window).height() );
    $(window).scroll(function() {
        if ( $(window).scrollTop() >= ($('body').height() - $(window).height()) ) {
            $(window).scrollTop(1);
        }
        else if ( $(window).scrollTop() == 0 ) {
            $(window).scrollTop($('body').height() - $(window).height() -1);
        }    
    });
});
$(window).resize(function() {
    $('body').height( bgHeight + $(window).height() );
});