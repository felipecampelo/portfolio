---
title: Data ingestion modernization
publishDate: 2026-12-12 00:00:00
img: /assets/projeto-el-airflow.png
img_alt: Project illustration.
description: |
  Best practices for extract-load pipelines and orchestration.
tags:
  - AWS
  - Airflow
  - Meltano
  - Python
  - SQL
  - Snowflake
---

> The problem

The data platform had a small number of extractions implemented directly in Python, without a single standard for execution, versioning, and reuse. There was no orchestrator (for example, Apache Airflow), which made it hard to schedule runs, observe failures, retries, and dependencies between steps. Everything ran manually. Maintenance was expensive: every change meant navigating loose scripts, which cost time and slowed onboarding.

In addition, credentials and sensitive parameters were often exposed in repositories or local configuration, increasing leakage risk.

<br />

> The solution

The solution was split across two complementary repositories:

1. **Declarative EL (extract-load) layer with Meltano**, centralizing pipelines in project files with environments (dev/prod) and Singer connectors, including custom implementations where no ready tap existed for a source. Loads land in Snowflake consistently.

2. **Orchestration with Apache Airflow in the cloud:** DAGs trigger jobs (for example, Kubernetes pods with a versioned container image), with retries, email alerts, and execution visibility in the Airflow UI.

3. **Secret hygiene:** integration with AWS Secrets Manager as the Airflow secrets/variables backend (prefixes per environment), replacing the previous model where secrets lived in plain code.

**Order of magnitude (code structure):** dozens of Python DAG files, ten Meltano pipeline definitions in YAML, and several custom taps/plugins.

<br />

> Project structure

| Folder | Role |
|--------|------|
| ***DAGs / Airflow* repository** | *Orchestration, scheduling, Secrets Manager integration, and Kubernetes execution.* |
| ***Meltano* repository** | *Declarative EL pipelines, plugins, and custom taps.* |

<br />

> Results

After the migration, scheduled runs reached roughly <span style="color: #a855f7;">100% success</span> in monitoring windows, with <span style="color: #a855f7;">dozens of DAGs</span> and <span style="color: #a855f7;">ten declarative EL pipelines</span>, plus <span style="color: #a855f7;">several custom connectors</span> for sources without off-the-shelf integration. Maintenance became <span style="color: #a855f7;">simpler and more predictable</span>, with changes concentrated in project definitions and orchestration, and the process <span style="color: #a855f7;">more automated</span> (scheduling, retries, notifications). From a security standpoint, sensitive variables used by DAGs are now sourced from AWS Secrets Manager, removing credentials that previously lived in the repository.

| Metric | Description |
|--------|-------------|
| **Scheduled run success rate** | *Roughly <span style="color: #a855f7;">100%</span> after stabilization.* |
| **Automation volume** | *Example: <span style="color: #a855f7;">15+</span> orchestration flows in production, <span style="color: #a855f7;">10</span> declarative EL jobs, <span style="color: #a855f7;">5+</span> custom connectors.* |
| **Secret exposure risk** | *<span style="color: #a855f7;">100%</span> of credentials used by DAGs sourced from a managed vault (AWS Secrets Manager), versus plain-text variables before.* |
| **Maintenance** | *Changes are localized in <span style="color: #a855f7;">one</span> place, reducing time spent per change.* |
| **Observability** | *Alerts on task failure, history, and retries centralized in Airflow.* |
