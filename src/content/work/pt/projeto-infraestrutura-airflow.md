---
title: Plataforma de Orquestração de Dados na AWS com Airflow e Terraform
publishDate: 2026-12-12 00:00:00
img: /assets/projeto-infraestrutura-airflow.png
img_alt: Imagem ilustrativa do projeto.
description: |
  Boas práticas aplicadas em Cloud.
tags:
  - AWS
  - Airflow
  - Terraform
  - CI/CD
  - Kubernetes
---

> O problema

<br />

A operação de dados era executada majoritariamente de forma manual, sem uma camada central de orquestração. Isso gerava alguns riscos importantes:

- Dependência de execução humana para rotinas críticas.
- Maior chance de falhas operacionais e inconsistências entre ambientes.
- Dificuldade para escalar workloads de dados conforme variação de demanda.
- Baixa padronização de deploy, segurança e governança.
- Processo de manutenção e atualização de componentes com alto custo operacional.

Em resumo, havia uma necessidade clara de transformar um cenário reativo e manual em uma plataforma confiável, rastreável e preparada para crescimento.

<br />

> A solução

<br />

Participei da implementação de uma arquitetura de dados em AWS, totalmente provisionada com Terraform, para executar o Apache Airflow em ambiente Kubernetes gerenciado (Amazon EKS), com foco em automação, segurança e escalabilidade.

<span style="color: #a855f7;">Arquitetura implementada (visão técnica)</span>

<br />

- Infraestrutura como Código (IaC) com Terraform, organizada em stacks/módulos reutilizáveis.
- Airflow em Kubernetes (EKS) com deploy via Helm, separando claramente:
  - camada de execução da aplicação;
  - camada persistente (estado, banco, segredos, artefatos).
- Escalabilidade dinâmica no cluster com mecanismos de autoscaling de nós e workloads.
- Imagens de execução versionadas e armazenadas em Amazon ECR.
- Gestão de segredos centralizada no AWS Secrets Manager, com sincronização para Kubernetes via External Secrets.
- Controle de acesso e autenticação no Airflow integrado com Amazon Cognito (SSO/OAuth e mapeamento de perfis).
- Persistência operacional para metadados, logs e estado de execução com serviços gerenciados (banco relacional + armazenamento em objeto).
- Boas práticas de segurança e governança, incluindo segregação de permissões por serviço/conta e uso de roles para workloads no EKS.

<br />

> Resultados

<br />

A entrega trouxe ganhos concretos de maturidade técnica e operacional:

✅ **Confiabilidade**: redução de falhas manuais e maior previsibilidade das execuções.
<br />
✅ **Disponibilidade**: arquitetura distribuída em EKS, com componentes resilientes.
<br />
✅ **Escalabilidade**: capacidade de absorver crescimento de carga sem reengenharia.
<br />
✅ **Segurança**: tratamento adequado de segredos, autenticação centralizada e menor exposição de credenciais.
<br />
✅ **Padronização**: ambientes reproduzíveis e auditáveis com Terraform.
<br />
✅ **Eficiência operacional**: manutenção, upgrades e evoluções passando a seguir fluxo estruturado e versionado.
