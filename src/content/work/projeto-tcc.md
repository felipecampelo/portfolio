---
title: Automação de registro de falhas de stability via integração com APIs
publishDate: 2024-04-03 00:00:00
img: /assets/projeto-tcc.png
img_alt: Ilustração do projeto.
description: |
  Resultados alcançados com o projeto.
tags:
  - Python
  - API
  - Jira
  - Testes
  - Stability
---

> Visão geral

Este projeto teve como objetivo automatizar o processo de coleta, análise e registro de falhas provenientes de testes de estabilidade, reduzindo a dependência de atividades manuais e aumentando a eficiência operacional.

<br />

> O problema

Durante a execução de testes de estabilidade em larga escala, falhas eram constantemente geradas e exibidas em dashboards. O processo de registro dessas falhas era totalmente manual e envolvia múltiplas etapas:

* Análise contínua dos dashboards para identificar falhas.
* Verificação manual da existência de registros prévios em sistemas de gerenciamento de issues.
* Criação de novos registros ou atualização de registros existentes.
* Inclusão de informações detalhadas como número de ocorrências, dispositivos afetados e logs.

Esse processo apresentava diversos desafios:

⚠️ Alto consumo de tempo operacional.
<br />
⚠️ Propensão a erros humanos.
<br />
⚠️ Atividades repetitivas e pouco escaláveis.
<br />
⚠️ Baixa eficiência na resposta a falhas.
<br />
⚠️ Desvio de foco da equipe de atividades mais estratégicas.

<br />

> A solução

Foi desenvolvida uma solução automatizada utilizando Python, com integração entre diferentes sistemas via APIs, cobrindo todo o fluxo de registro de falhas:

1. **Coleta automatizada de dados**
	- Consumo de dados de dashboards por meio de APIs internas.
	- Extração de informações relevantes sobre falhas (execuções, dispositivos, logs, etc.).

2. **Processamento e análise de falhas**
	- Estruturação dos dados em DataFrames.
	- Aplicação de filtros e agrupamentos para identificar eventos relevantes.

3. **Integração com sistema de gerenciamento de issues (via API)**
	- Verificação automática da existência de registros relacionados.
	- Atualização de registros existentes com novas ocorrências.
	- Clonagem de registros similares de outros projetos quando necessário.

4. **Automação do fluxo de decisão**
	- Definição automática de ações: criar, atualizar ou sinalizar necessidade de ação manual.
	- Inclusão de comentários com informações detalhadas e links úteis.

5. **Integração com planilhas e metadados**
	- Uso de dados auxiliares para enriquecimento das informações registradas.
	- Padronização das informações inseridas no sistema.

6. **Logging e rastreabilidade**
	- Geração de logs durante execução para acompanhamento e debug.

<br />

> Resultados

✅ Redução de aproximadamente <span style="color: #a855f7;">20 horas semanais</span> de trabalho manual
<br />
✅ Aumento significativo da eficiência operacional no registro de falhas
<br />
✅ Maior rapidez na identificação e resposta a problemas
<br />
✅ Melhoria na qualidade, consistência e padronização dos dados registrados
<br />
✅ Redução de erros humanos no processo de análise e registro
<br />
✅ Liberação do time para atuar em atividades mais analíticas e estratégicas
