---
title: Home
style: home
---

{% include metadata %}

# You're here! Now read this...

{% for book in site.data.meta.works %}
*[{{ book.title }}]({{ book.directory }}/text/{{ book.products.web.start-page }}.html)*
{% endfor %}



