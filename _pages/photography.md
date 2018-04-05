---
layout: page
title: Photography
permalink: /photography/
---

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/lightgallery/1.6.8/css/lightgallery.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/justifiedGallery/3.6.5/css/justifiedGallery.min.css">
<link rel="stylesheet" href="{{site.baseurl}}/css/gallery.css">

{% capture path %}{{ site.baseurl }}/img/photographs/{% endcapture %}

{% for section in site.data.photography %}

<div class="gallery-section">
	<h2>{{ section.name }}</h2>

	<div class="lightgallery justified-gallery">

		{% for photograph in section.images %}

			{% if photograph.absolute %}
				{% capture path %}{% endcapture %}
			{% endif %}

		<a href="{{ path }}{{ photograph.image }}">
			<img src="{% if photograph.thumbnail %} {{ path }}{{ photograph.thumbnail }} {% else %} {{ path }}{{ photograph.image }} {% endif %}" alt="{{ photograph.caption }}"/>
			{% if photograph.badge %}
			<span class="badge">
			  	{% if photograph.badgetype == 'icon' %}
				<i class="{{photograph.badge}}"></i>
				{% else %}
					{{ photograph.badge }}
				{% endif %}
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
