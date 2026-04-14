---
title: Automating stability failure triage via API integrations
publishDate: 2024-04-03 00:00:00
img: /assets/projeto-tcc.png
img_alt: Project illustration.
description: |
  Outcomes from end-to-end automation of stability workflows.
tags:
  - Python
  - API
  - Jira
  - Testing
  - Stability
---

> Overview

This project automated collecting, analyzing, and recording stability-test failures, reducing manual toil and improving operational efficiency.

<br />

> The problem

During large-scale stability testing, failures surfaced on dashboards. Recording them was fully manual and spanned multiple steps:

* Continuous dashboard review to spot failures.
* Manual checks for existing records in issue trackers.
* Creating new records or updating existing ones.
* Adding details such as occurrence counts, affected devices, and logs.

Challenges included:

⚠️ High time cost for operators.
<br />
⚠️ Human error risk.
<br />
⚠️ Repetitive work that did not scale.
<br />
⚠️ Slower response to failures.
<br />
⚠️ Less focus on higher-value engineering work.

<br />

> The solution

An automated Python solution integrated systems via APIs across the failure lifecycle:

1. **Automated data collection**
	- Consumed dashboard data via internal APIs.
	- Extracted relevant failure details (runs, devices, logs, etc.).

2. **Processing and analysis**
	- Structured data in DataFrames.
	- Filters and grouping to highlight meaningful events.

3. **Issue tracker integration (API)**
	- Automatic checks for related existing records.
	- Updates to existing records with new occurrences.
	- Cloning similar records from other projects when needed.

4. **Decision automation**
	- Automatic actions: create, update, or flag manual follow-up.
	- Rich comments with details and useful links.

5. **Spreadsheets and metadata**
	- Auxiliary data to enrich records.
	- Standardized fields in the tracker.

6. **Logging and traceability**
	- Execution logs for monitoring and debugging.

<br />

> Results

✅ Roughly <span style="color: #a855f7;">20 hours per week</span> of manual work removed
<br />
✅ Higher operational efficiency in failure recording
<br />
✅ Faster detection and response
<br />
✅ Better quality, consistency, and standardization of recorded data
<br />
✅ Fewer human errors in analysis and recording
<br />
✅ More capacity for analytical and strategic work
