---
title: Modernização de ingestão de dados
publishDate: 2026-12-12 00:00:00
img: /assets/projeto-el-airflow.png
img_alt: Imagem ilustrativa do projeto.
description: |
  Boas práticas aplicadas em extrações de dados.
tags:
  - AWS
  - Airflow
  - Meltano
  - Python
  - SQL
  - Snowflake
---

> O problema

O ambiente de dados concentrava poucas extrações de dados, implementadas diretamente em Python, sem um padrão único de execução, versionamento e reutilização. Não havia orquestrador (por exemplo, Apache Airflow), o que dificultava agendar execuções, observar falhas, retries e dependências entre etapas. Tudo era executado de forma manual. A manutenção era custosa: cada mudança exigia navegar em scripts soltos, o que demandava bastante tempo e dificultava o entendimento de novos colaboradores.

Além disso, credenciais e parâmetros sensíveis costumavam ficar expostos em repositório ou configuração local, aumentando risco de vazamento.

<br />

> A solução

Foi desenhada uma solução em dois repositórios complementares:

1. **Camada de EL (extract-load)** declarativa com Meltano, centralizando pipelines em arquivos de projeto, com ambiente (dev/prod), e conectores Singer, incluindo implementações customizadas onde não havia TSP pronto para a fonte. A carga segue para o Snowflake de forma consistente.

2. **Camada de orquestração com Apache Airflow na nuvem**: DAGs que disparam jobs (por exemplo, pods em Kubernetes com imagem versionada em registro de contêineres), com retries, alertas por e-mail e visibilidade de execuções no painel do Airflow.

3. **Segurança de segredos**: integração com AWS Secrets Manager como backend de segredos/variáveis do Airflow (prefixos por ambiente), substituindo o modelo anterior em que segredos ficavam à vista em código.

**Ordem de grandeza (estrutura do código)**: dezenas de arquivos de DAG em Python, dez definições de pipeline Meltano em YAML, e vários taps/plugins customizados.

<br />

> Estrutura do projeto

| Pasta | Função |
|-------|--------|
| **Repositório de *DAGs / Airflow*** | *Orquestração, agendamento, integração com Secrets Manager e execução em Kubernetes.* |
| **Repositório *Meltano*** | *Pipelines EL declarativos, plugins e taps customizados.* |

<br />

> Resultados

Após a migração, as execuções agendadas passaram a apresentar <span style="color: #a855f7;">taxa de sucesso de aproximadamente 100%</span> nas janelas de monitoramento, com <span style="color: #a855f7;">dezenas de DAGs</span> e <span style="color: #a855f7;">dez pipelines EL</span> declarativos, além de <span style="color: #a855f7;">vários conectores customizados</span> para fontes sem integração pronta. A manutenção ficou <span style="color: #a855f7;">mais simples e previsível</span>, com mudanças concentradas em definições de projeto e orquestração, e o processo <span style="color: #a855f7;">mais automático</span> (agendamento, retries, notificações). Do ponto de vista de segurança, as variáveis sensíveis relevantes às DAGs passaram a ser obtidas via AWS Secrets Manager, eliminando credenciais expostas no repositório que existiam no modelo anterior.

| Métrica | Descrição / como preencher |
|--------|----------------------------|
| **Taxa de sucesso das execuções agendadas** | *Taxa de sucesso de aproximadamente <span style="color: #a855f7;">100%</span> após estabilização.* |
| **Volume de automações** | *Ex.: <span style="color: #a855f7;">15+</span> fluxos de orquestração em produção</span>, <span style="color: #a855f7;">10</span> jobs EL declarativos, <span style="color: #a855f7;">5+</span> conectores customizados.* |
| **Redução de risco de exposição de segredos** | *<span style="color: #a855f7;">100%</span> das credenciais usadas pelas DAGs obtidas via cofre gerenciado (AWS Secrets Manager), em contraste com variáveis sensíveis em texto no modelo anterior.* |
| **Manutenção** | *Mudanças passam a ser localizadas em <span style="color: #a855f7;">um</span> lugar, reduzindo o tempo gasto por um colaborador para manutenção.* |
| **Observabilidade** | *Alertas em falha de task, histórico e retries centralizados no Airflow.* |