---
title: Cloud migration and GCP data pipelines
publishDate: 2022-12-01 00:00:00
img: /assets/projeto-migracao-gcp.png
img_alt: Project illustration.
description: |
  Lessons and outcomes from migrating from on-premises to GCP.
tags:
  - GCP
  - Cloud SQL
  - Airflow (Composer)
  - SQL
  - Python
  - SFTP
---

> Overview

This project was delivered as a freelance engagement (~30 hours total) to modernize the data architecture and address critical issues from manual pipeline runs and on-premises infrastructure.

<br />

> The problem

Processing relied on Python scripts executed manually, backed by a local PostgreSQL database. That setup had several limitations:

⚠️ No automation or orchestration for pipelines.
<br />
⚠️ High operational risk from manual execution.
<br />
⚠️ Limited scalability and maintainability.
<br />
⚠️ No centralized, reliable cloud environment.
<br />
⚠️ Weak handling of credentials and sensitive variables.
<br />
⚠️ Limited traceability and monitoring of runs.

<br />

> The solution

The architecture was modernized with a cloud migration and orchestrated pipelines:

1. **Database migration**
	- Move from local PostgreSQL to Cloud SQL (PostgreSQL 14) on GCP
	- Higher availability, scalability, and reliability

2. **Orchestration with Airflow (Cloud Composer)**
	- DAGs to automate pipelines
	- Daily, weekly, and monthly schedules
	- Robust, reusable workflows

3. **SFTP integration**
	- Ingestion over SFTP
	- End-to-end automation of collection and loading

4. **Secrets and sensitive variables**
	- GCP-native secret storage integrated with DAGs

5. **Standards and governance**
	- Code and pipelines aligned to best practices
	- Better observability and traceability

<br />

> Results

- <span style="color: #a855f7;">100%</span> automated runs, removing manual steps.
- Stronger security for credential management.
- Scalable, reliable infrastructure on GCP.
- Fewer operational errors and less rework.
- Better visibility via Airflow.
- More consistent, predictable ingestion.
- A solid foundation for future platform evolution.
