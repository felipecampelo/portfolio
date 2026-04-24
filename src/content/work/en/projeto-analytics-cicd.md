---
title: Production pipelines for dbt models
publishDate: 2026-12-12 00:00:00
img: /assets/projeto-analytics-cicd.png
img_alt: Project illustration.
description: |
  Best practices applied in CI/CD.
tags:
  - Databricks
  - PySpark
  - SQL
  - dbt
  - Jenkins
---

> The problem

<br />

Shipping new analytics models to production was slow, manual, and unreliable. The flow depended on operational runbooks and heavy human intervention, without standardized technical gates to validate quality before promotion. That caused:

- High lead time to put new models in production.
- High error risk from lack of automated validation.
- Low predictability in the deploy process.
- Difficulty scaling the team’s delivery volume.

Historically, publishing new tables took about **3 days**.

<br />

> The solution

<br />

A dbt CI/CD pipeline was designed and implemented for fast, safe, and auditable productionization, using Jenkins and project automation scripts.

<span style="color: #a855f7;">1) Pipeline design by execution type</span>

Pipelines were tailored to different delivery contexts (e.g. PR validation, merge flow, and environment-specific runs).

- Run routing by branch or event.
- Clear separation between validation and promotion.
- A single, standardized path for all new models.

<span style="color: #a855f7;">2) Quality gate in productionization</span>

The pipeline was configured not to promote code without technical checks:

- `dbt build` as validation.
- Support for tests and declarative checks already defined in the project.
- Automatic failure on build/quality issues.
- Traceability of what was validated in each run.
- Code linting with SQLFluff.

<span style="color: #a855f7;">3) Faster, cheaper validation runs using dbt state</span>

Change-driven incremental runs were added to speed validation pipelines:

- **state:modified+** strategy when prior state exists.
- Fallback to full build when required.
- Shorter CI time without losing impact safety.

<br />

> Outcomes

<br />
✅ Sharp drop in lead time: new table productionization went from ~3 days to about 1 hour.
<br />
✅ More reliable operations: deploy no longer depended on manual steps and now follows automated gates.
<br />
✅ Team scalability: more new models could be delivered with less risk.
<br />
✅ Process standardization: one validation and promotion flow for different change types.
<br />
✅ Strong satisfaction from the technical team: analytics engineers reported consistently positive feedback on the new pipeline.
