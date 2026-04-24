---
title: Data orchestration platform on AWS with Airflow and Terraform
publishDate: 2026-12-12 00:00:00
img: /assets/projeto-infraestrutura-airflow.png
img_alt: Project illustration.
description: |
  Best practices applied in the cloud.
tags:
  - AWS
  - Airflow
  - Terraform
  - CI/CD
  - Kubernetes
---

> The problem

<br />

Data operations were mostly manual, with no central orchestration layer. That created several important risks:

- Reliance on people to run business-critical jobs.
- Higher chance of operational failures and environment drift.
- Difficulty scaling data workloads with demand.
- Little standardization around deploy, security, and governance.
- Expensive maintenance and component upgrades.

In short, the goal was to move from a reactive, manual setup to a reliable, traceable platform that could grow.

<br />

> The solution

<br />

I contributed to implementing a data architecture on AWS, fully provisioned with Terraform, running Apache Airflow on managed Kubernetes (Amazon EKS), with a focus on automation, security, and scalability.

<span style="color: #a855f7;">Implemented architecture (technical view)</span>

<br />

- Infrastructure as code with Terraform, organized in reusable stacks/modules.
- Airflow on Kubernetes (EKS), deployed with Helm, with clear separation between:
  - application execution;
  - persistent layer (state, database, secrets, artifacts).
- Dynamic cluster scaling with node- and workload-level autoscaling.
- Versioned execution images stored in Amazon ECR.
- Centralized secrets in AWS Secrets Manager, synced to Kubernetes with External Secrets.
- Airflow access and authentication integrated with Amazon Cognito (SSO/OAuth and role mapping).
- Operational persistence for metadata, logs, and run state using managed services (relational DB + object storage).
- Security and governance practices, including permission segregation by service/account and IAM roles for EKS workloads.

<br />

> Outcomes

<br />

The delivery improved technical and operational maturity in concrete ways:

✅ **Reliability:** fewer manual failures and more predictable runs.
<br />
✅ **Availability:** distributed EKS-based architecture with resilient components.
<br />
✅ **Scalability:** capacity to handle load growth without a full redesign.
<br />
✅ **Security:** proper secret handling, centralized auth, and less credential exposure.
<br />
✅ **Standardization:** reproducible, auditable environments with Terraform.
<br />
✅ **Operational efficiency:** maintenance, upgrades, and evolution follow a structured, versioned process.
