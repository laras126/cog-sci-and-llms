---
layout: page
title: Weekly Plans
description: Listing of course modules and topics.
nav_order: 1
---

# Weekly Plans

__Note:__  "Readings" listed for each class will be related to the topics of that class, so try to do them before that class. The "Work On" links point to what to work on between one class to the next.

{% include next-class.html %}

{% for week in site.data.weeks %}
{% include week-block.html week=week show_id=true %}
{% endfor %}
