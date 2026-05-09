---
layout: page
title: Schedule
description: The weekly event schedule.
---

# Weekly Schedule

Later in the course, we may add additional meeting times based on different time zones for support on research projects.

{% for schedule in site.schedules %}
{{ schedule }}
{% endfor %}
