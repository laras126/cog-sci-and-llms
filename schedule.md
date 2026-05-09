---
layout: page
title: Meeting Times
description: The weekly schedule.
---

# Weekly Meetings (EST)

Later in the course, we may add additional meeting times based on different time zones for support on research projects.

See the Canvas Calendar to access the Zoom link and add the weekly meeting(s) to your own calendar.

{% for schedule in site.schedules %}
{{ schedule }}
{% endfor %}
