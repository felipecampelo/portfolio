---
title: Migração para cloud e desenvolvimento de pipelines de dados para a GCP
publishDate: 2022-12-01 00:00:00
img: /assets/projeto-migracao-gcp.png
img_alt: Ilustração do projeto.
description: |
  Desafios e resultados da migração de on-premise para o GCP.
tags:
  - GCP
  - Cloud SQL
  - Airflow (Composer)
  - SQL
  - Python
  - SFTP
---

> Visão geral

Este projeto foi desenvolvido como uma iniciativa freelancer, com duração total de aproximadamente 30 horas, com o objetivo de modernizar a arquitetura de dados e resolver problemas críticos relacionados à execução manual de pipelines e infraestrutura local.

<br />

> O problema

O processamento de dados era realizado por meio de scripts em Python executados manualmente, com dependência de um banco de dados PostgreSQL local. Esse cenário trazia diversas limitações:

⚠️ Falta de automação e orquestração dos pipelines.
<br />
⚠️ Alto risco operacional devido a execuções manuais.
<br />
⚠️ Dificuldade de escalabilidade e manutenção.
<br />
⚠️ Ausência de um ambiente centralizado e confiável na nuvem.
<br />
⚠️ Gestão inadequada de credenciais e variáveis sensíveis.
<br />
⚠️ Baixa rastreabilidade e monitoramento das execuções.

<br />

> A solução

Foi realizada a modernização da arquitetura de dados com migração para a cloud e implementação de pipelines orquestrados:

1. **Migração do banco de dados**
	- Transição do PostgreSQL local para o Cloud SQL (PostgreSQL 14) no GCP
	- Garantia de maior disponibilidade, escalabilidade e confiabilidade

2. **Orquestração com Airflow (Cloud Composer)**
	- Desenvolvimento de DAGs para automatizar os pipelines
	- Agendamento de execuções diárias, semanais e mensais
	- Estruturação de workflows robustos e reutilizáveis

3. **Integração com SFTP**
	- Implementação de ingestão de dados via protocolo SFTP
	- Automação completa do processo de coleta e carga de dados

4. **Gestão de credenciais e variáveis sensíveis**
	- Uso de mecanismos seguros do GCP para armazenamento de secrets
	- Integração com as DAGs garantindo segurança e boas práticas

5. **Padronização e governança**
	- Organização do código e pipelines seguindo boas práticas
	- Melhoria na observabilidade e rastreabilidade das execuções

<br />

> Resultados

- Execuções <span style="color: #a855f7;">100%</span> automatizadas, eliminando processos manuais.
- Segurança aprimorada no gerenciamento de credenciais.
- Infraestrutura escalável e confiável com GCP.
- Redução significativa de erros operacionais e retrabalho.
- Maior visibilidade e monitoramento dos processos via Airflow.
- Processos de ingestão de dados mais consistentes e previsíveis.
- Base sólida para evolução futura da plataforma de dados.
