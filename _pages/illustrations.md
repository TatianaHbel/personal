---
layout: page
title: Illustrations
permalink: /illustrations/
---

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/lightgallery/1.6.8/css/lightgallery.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/justifiedGallery/3.6.5/css/justifiedGallery.min.css">
<link rel="stylesheet" href="{{site.baseurl}}/css/gallery.css">


hello illustrations

{% for section in site.data.illustrations %}

<div class="gallery-section">
	<h2>{{ section.name }}</h2>

<div class="lightgallery justified-gallery">

	{% for illustration in section.images %}
	<a href="{{ illustration.image }}">
	  <img src="{% if illustration.thumbnail %} {{ illustration.thumbnail }} {% else %}{{ illustration.image }}{% endif %}" alt="{{ illustration.caption }}"/>
	</a>
	{% endfor %}

</div>

</div>

{% endfor %}

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/justifiedGallery/3.6.5/js/jquery.justifiedGallery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/lightgallery/1.6.8/js/lightgallery-all.min.js"></script>
<script src="{{site.baseurl}}/js/gallery.js"></script>
