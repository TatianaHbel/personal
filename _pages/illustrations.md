---
layout: page
title: Illustrations
permalink: /illustrations/
---

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/lightgallery/1.6.8/css/lightgallery.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/justifiedGallery/3.6.5/css/justifiedGallery.min.css">
<link rel="stylesheet" href="{{site.baseurl}}/css/gallery.css">

{% capture path %}{{ site.baseurl }}/img/illustrations/{% endcapture %}

{% for section in site.data.illustrations %}

<div class="gallery-section">
	<h2>{{ section.name }}</h2>

	<div class="lightgallery justified-gallery" data-height="200px">

		{% for illustration in section.images %}

			{% if illustration.absolute %}
				{% capture path %}{% endcapture %}
			{% endif %}

		<a href="{{ path }}{{ illustration.image }}">
		  <img src="{% if illustration.thumbnail %} {{ path }}{{ illustration.thumbnail }} {% else %} {{ path }}{{ illustration.image }}{% endif %}" alt="{{ illustration.caption }}"/>
		  {% if illustration.badgeIcon or illustration.badgeText %}
		  <span class="badge">
		  	{% if illustration.badgeIcon %}
		  	<i class="{{ illustration.badgeIcon }}"></i>
		  	{% endif %}
		  	{{ illustration.badgeText }}
		  </span>
		  {% endif %}
		</a>
		{% endfor %}

	</div>

</div>

{% endfor %}

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/justifiedGallery/3.6.5/js/jquery.justifiedGallery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/lightgallery/1.6.8/js/lightgallery-all.min.js"></script>
<script src="{{site.baseurl}}/js/gallery.js"></script>
