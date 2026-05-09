---
layout: page
title: Meeting Times
description: The weekly schedule.
---

# Weekly Meetings

Later in the course, we may add additional meeting times based on different time zones for support on research projects.

See the Canvas Calendar to add the weekly meeting(s) to your calendar.

{% for schedule in site.schedules %}
{{ schedule }}
{% endfor %}
