---
layout: page
title: Photography
permalink: /photography/
---

<!-- Core CSS file -->
<link rel="stylesheet" href="{{site.baseurl}}/css/photoswipe.css">

<!-- Skin CSS file (styling of UI - buttons, caption, etc.)
     In the folder of skin CSS file there are also:
     - .png and .svg icons sprite, 
     - preloader.gif (for browsers that do not support CSS animations) -->
<link rel="stylesheet" href="{{site.baseurl}}/css/default-skin/default-skin.css">
<link rel="stylesheet" href="{{site.baseurl}}/css/gallery.css">

{% for section in site.data.photography %}

<h2>{{ section.name }}</h2>

<div class="my-gallery" itemscope itemtype="http://schema.org/ImageGallery">

	{% for photograph in section.images %}

	<figure itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject">
		<a href="{{ photograph.image }}" itemprop="contentUrl" data-size="1024x1024">
			<img src="{{ photograph.image }}" itemprop="thumbnail" alt="Image description" />
		</a>
		<figcaption itemprop="caption description">{{ photograph.caption }}</figcaption>
	</figure>

	{% endfor %}

</div>

{% endfor %}



<!-- Root element of PhotoSwipe. Must have class pswp. -->
<div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">

    <!-- Background of PhotoSwipe. 
         It's a separate element, as animating opacity is faster than rgba(). -->
    <div class="pswp__bg"></div>

    <!-- Slides wrapper with overflow:hidden. -->
    <div class="pswp__scroll-wrap">

        <!-- Container that holds slides. PhotoSwipe keeps only 3 slides in DOM to save memory. -->
        <!-- don't modify these 3 pswp__item elements, data is added later on. -->
        <div class="pswp__container">
            <div class="pswp__item"></div>
            <div class="pswp__item"></div>
            <div class="pswp__item"></div>
        </div>

        <!-- Default (PhotoSwipeUI_Default) interface on top of sliding area. Can be changed. -->
        <div class="pswp__ui pswp__ui--hidden">

            <div class="pswp__top-bar">

                <!--  Controls are self-explanatory. Order can be changed. -->

                <div class="pswp__counter"></div>

                <button class="pswp__button pswp__button--close" title="Close (Esc)"></button>

                <button class="pswp__button pswp__button--share" title="Share"></button>

                <button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>

                <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>

                <!-- Preloader demo https://codepen.io/dimsemenov/pen/yyBWoR -->
                <!-- element will get class pswp__preloader--active when preloader is running -->
                <div class="pswp__preloader">
                    <div class="pswp__preloader__icn">
                      <div class="pswp__preloader__cut">
                        <div class="pswp__preloader__donut"></div>
                      </div>
                    </div>
                </div>
            </div>

            <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                <div class="pswp__share-tooltip"></div> 
            </div>

            <button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)">
            </button>

            <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)">
            </button>

            <div class="pswp__caption">
                <div class="pswp__caption__center"></div>
            </div>

          </div>

        </div>

</div>



<!-- Core JS file -->
<script src="{{site.baseurl}}/js/photoswipe.min.js"></script>

<!-- UI JS file -->
<script src="{{site.baseurl}}/js/photoswipe-ui-default.min.js"></script> 

<script src="{{site.baseurl}}/js/custom.js"></script>
