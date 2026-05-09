---
layout: page
title: Meeting Times
description: The weekly schedule.
---

# Weekly Meetings

Later in the course, we may add additional meeting times based on different time zones for support on research projects.

# [Download .ics]({{ '/assets/cog-sci-and-llms.ics' | relative_url }}){: .btn .btn-outline }
# [Add to Google Calendar](https://calendar.google.com/calendar/r/eventedit?text=Cognitive+Science+%26+LLMs+%E2%80%94+Optional+Seminar&dates=20260520T000000Z/20260520T010000Z&recur=RRULE:FREQ%3DWEEKLY;COUNT%3D10&details=Optional+in-person+session.+Zoom+link+in+Canvas.&location=Zoom){: .btn .btn-outline }

{% for schedule in site.schedules %}
{{ schedule }}
{% endfor %}
