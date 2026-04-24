---
title: MLOps framework on Databricks / Jenkins
publishDate: 2026-12-12 00:00:00
img: /assets/projeto-mlops-databricks.png
img_alt: Project illustration.
description: |
  Best practices applied in MLOps.
tags:
  - Databricks
  - Python
  - Jenkins
  - CI/CD
---

> Project context

<br />

This project aimed to structure and run an MLOps pipeline for deploying machine learning models to production, replacing a manual, lightly governed process with an automated, versioned, and auditable one.

<br />

> The problem

<br />

Before the initiative, the model delivery cycle had important limitations:

- Manual deploys from notebooks.
- No dedicated ML CI/CD for machine learning assets.
- No formal validation before production promotion.
- Low traceability of code, configuration, and artifact versions.
- High human-error risk and environment inconsistency.

That made scaling, technical governance, and operational reliability difficult.

<br />

> Solution implemented

<br />

The solution was end-to-end, focusing on standardization, automation, and safe promotion between environments.

<span style="color: #a855f7;">1) Standardized deploy with Databricks Bundles</span>

A Databricks Bundles–based packaging and delivery framework was adopted, providing:

- Declarative structure for job and workflow definitions.
- Code versioned in a repository.
- Environment-based parameters (e.g. dev, staging, production).
- Reproducible deploys without depending on one-off manual runs.

Deployment became configuration- and code-driven, reducing operational variability.

<span style="color: #a855f7;">2) CI/CD pipeline with Jenkins</span>

A CI/CD pipeline was built for models and workflows, including:

- Automated triggers on versioning events (e.g. merge to main).
- Build, validation, and controlled release stages.
- Environment promotion with defined criteria.
- Less manual intervention on the path to production.

The combination of version control, Bundles, and Jenkins created a consistent delivery path for new models.

<span style="color: #a855f7;">3) Governance and pre-production validation</span>

The new approach added quality gates before production, such as:

- Configuration integrity checks by environment.
- Consistency checks for artifacts and dependencies.
- Approval criteria for promotion.
- Change control and a history of deployed versions.

The result was more predictable, lower-risk production rollouts.

<br />

> Outcomes

<br />

<span style="color: #a855f7;">Operations</span>

✅ Significant reduction in manual deploy work.
<br />
✅ Lower incidence of operational mistakes.
<br />
✅ Higher speed and predictability in model delivery.
<br />

<span style="color: #a855f7;">Technical</span>

✅ Standardized deployment with a declarative approach.
<br />
✅ Reproducibility across environments.
<br />
✅ Better traceability of what was deployed, when, and how.
<br />

<span style="color: #a855f7;">Governance</span>

✅ A process with clear validation and promotion criteria.
<br />
✅ Better change control and safer production releases.
<br />
✅ A solid base for ongoing MLOps evolution.
<br />

<br />

> Business impact

<br />

The initiative increased confidence in model productionization, reduced operational risk, and enabled a more scalable ML operation. With an automated, controlled pipeline, the team could deliver value more often with lower maintenance cost.
