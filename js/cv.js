jQuery(document).ready(function($) {

    $('.level-bar-inner').css('width', '0');

    $('.level-bar-inner').each(function() {
    
        var itemWidth = $(this).data('level');
        
        $(this).animate({
            width: itemWidth
        }, 800);
        
    });
    if ($(".content").css('margin-left') != '0px') {
    	$(".sidebar").height($(".content").height() + 200);	
    }
    
});