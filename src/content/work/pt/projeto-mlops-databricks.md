---
title: Framework de MLOps no Databricks / Jenkins
publishDate: 2026-12-12 00:00:00
img: /assets/projeto-mlops-databricks.png
img_alt: Imagem ilustrativa do projeto.
description: |
  Boas práticas aplicadas em MLOps.
tags:
  - Databricks
  - Python
  - Jenkins
  - CI/CD
---

> Contexto do Projeto

<br />

Este projeto teve como objetivo estruturar e operacionalizar uma esteira de MLOps para implantação de modelos de machine learning em produção, substituindo um fluxo manual e pouco governado por um processo automatizado, versionado e auditável.

<br />

> O problema

<br />

Antes da iniciativa, o ciclo de entrega de modelos apresentava limitações importantes:

- Deploys realizados manualmente via notebooks.
- Ausência de esteira de CI/CD dedicada para ativos de machine learning.
- Falta de validações formais antes da promoção para produção.
- Baixa rastreabilidade de versões de código, configuração e artefatos.
- Alto risco de erro humano e inconsistência entre ambientes.

Esse cenário dificultava escalabilidade, governança técnica e confiabilidade operacional.

<br />

> Solução Implementada

<br />

A solução foi desenhada para atacar o problema de ponta a ponta, com foco em padronização, automação e segurança de promoção entre ambientes.

<span style="color: #a855f7;">1) Padronização do deploy com Databricks Bundles</span>

Foi adotado um framework de empacotamento e entrega com Databricks Bundles, trazendo:

- Estrutura declarativa para definição de jobs/workflows.
- Versionamento em repositório de código.
- Parametrização por ambiente (ex.: desenvolvimento, homologação, produção).
- Reprodutibilidade do deploy sem dependência de execução manual.

Com isso, o processo de implantação passou a ser orientado por configuração e código, reduzindo variabilidade operacional.

<span style="color: #a855f7;">2) Esteira de CI/CD com Jenkins</span>

Foi construída uma esteira de CI/CD para modelos e workflows, contemplando:

- Disparo automatizado por eventos de versionamento (ex.: merge em branch principal).
- Etapas de build, validação e publicação controlada.
- Promoção entre ambientes com critérios definidos.
- Redução de intervenção manual no caminho até produção.

A integração entre versionamento + Bundles + Jenkins estabeleceu um fluxo consistente de entrega de novos modelos.

<span style="color: #a855f7;">3) Governança e validações pré-produção</span>

A nova abordagem incluiu gates de qualidade antes da produtização, como:

- Validação de integridade de configurações por ambiente.
- Verificação de consistência de artefatos e dependências.
- Critérios de aprovação para promoção.
- Controle de mudanças e histórico de versões implantadas.

Com isso, tivemos como resultado uma entrada em produção com maior previsibilidade e menor risco.

<br />

> Resultados Alcançados

<br />

<span style="color: #a855f7;">Operacionais</span>

✅ Redução significativa de atividades manuais no deploy.
<br />
✅ Menor incidência de falhas por erro operacional.
<br />
✅ Maior velocidade e previsibilidade na entrega de modelos.
<br />

<span style="color: #a855f7;">Técnicos</span>

✅ Padronização da implantação com abordagem declarativa.
<br />
✅ Reprodutibilidade entre ambientes.
<br />
✅ Ganho de rastreabilidade (o que foi implantado, quando e como).
<br />

<span style="color: #a855f7;">Governança</span>

✅ Processo com critérios claros de validação e promoção.
<br />
✅ Melhor controle de mudanças e segurança da publicação em produção.
<br />
✅ Base sólida para evolução contínua de MLOps.
<br />

<br />

> Impacto para o Negócio

<br />

A iniciativa aumentou a confiança no processo de produtização de modelos, reduzindo risco operacional e habilitando uma operação de ML mais escalável. Com uma esteira automatizada e controlada, o time passou a entregar valor com maior frequência e menor custo de manutenção.