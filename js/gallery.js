$(document).ready(function() {
    $(".lightgallery").lightGallery({
		    thumbnail: true,
		    animateThumb: true,
		    showThumbByDefault: true
    });
    var options = {
    	rowHeight: $(".justified-gallery").attr("data-height")
    }
    $(".lightgallery").justifiedGallery(options);
    $(".gallery-section h2").fadeIn();
});
