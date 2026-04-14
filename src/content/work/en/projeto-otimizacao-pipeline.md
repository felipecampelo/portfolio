---
title: Data pipeline optimization
publishDate: 2025-12-12 00:00:00
img: /assets/projeto-otimizacao-pipeline.png
img_alt: Optimization flow illustration.
description: |
  Production improvements and measurable outcomes.
tags:
  - Synapse
  - PySpark
  - SQL
  - PostgreSQL
  - AWS
  - Azure
---

> Introduction

The goals were to make processing from the production database reliable with acceptable data freshness—an execution SLO around 99% and data available in under one hour. Initially, the pipeline failed often and took about three hours per run.

This write-up covers the changes, results, and impact on reliability and cost.

<br />

> Database connectivity mode

Access from the Azure Integration Runtime VM to the database server (AWS) was unstable. It depended on an AWS bastion host and an SSH tunnel from the Azure VM to that bastion. We moved to a direct connection between the Integration Runtime VM and PostgreSQL on AWS.

After that change, we stopped seeing connection drops to the database, and the <span style="color: #a855f7;">execution SLO moved close to 100%</span>.

<br />

> Parallelism

Tables used to be ingested sequentially. After working with SRE, DBRE, and product engineering, we tested different parallelism settings. Parallelism of 5 fit our scenario best, making better use of compute on the processing host and reducing runtime.

<br />

> Incremental loads

Only one table used incremental ingestion. After reviewing the remaining tables and their full-load durations, we identified incremental opportunities.

The tables switched to incremental ingestion saved an estimated 29 minutes in total. Per-table savings:

<div class="table-with-total-footer">
<table>
<thead>
<tr>
<th>Table</th>
<th>Full load time</th>
<th>Incremental</th>
<th>Saved</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>tabela_1</code></td>
<td><code>Full (~20 min)</code></td>
<td><code>Incremental (~3 min)</code></td>
<td><code>17 min</code></td>
</tr>
<tr>
<td><code>tabela_2</code></td>
<td><code>Full (~9 min)</code></td>
<td><code>Incremental (~2 min)</code></td>
<td><code>7 min</code></td>
</tr>
<tr>
<td><code>tabela_3</code></td>
<td><code>Full (~8 min)</code></td>
<td><code>Incremental (~3 min)</code></td>
<td><code>5 min</code></td>
</tr>
<tr>
<td><code>tabela_4</code></td>
<td><code>Full (~5 min)</code></td>
<td><code>Incremental (~2 min)</code></td>
<td><code>3 min</code></td>
</tr>
<tr>
<td><code>tabela_5</code></td>
<td><code>Full (~5 min)</code></td>
<td><code>Incremental (~3 min)</code></td>
<td><code>2 min</code></td>
</tr>
<tr>
<td><code>tabela_6</code></td>
<td><code>Full (~5 min)</code></td>
<td><code>Incremental (~2 min)</code></td>
<td><code>3 min</code></td>
</tr>
<tr>
<td><code>tabela_7</code></td>
<td><code>Full (~5 min)</code></td>
<td><code>Incremental (~3 min)</code></td>
<td><code>2 min</code></td>
</tr>
<tr>
<td><strong>Estimated total</strong></td>
<td></td>
<td></td>
<td><strong>29 min</strong></td>
</tr>
</tbody>
</table>
</div>

<br />

> Sensitive data encryption approach

Encryption previously ran in a Spark pool with Python. We moved encryption to an Azure Function. That reduced processing time and session startup overhead from Spark pools and notebooks, lowering cost—encryption that took ~5 minutes dropped to ~20 seconds with the function.

<br />

> Conclusion

After these optimizations, <span style="color: #a855f7;">pipeline runtime dropped by 135 minutes and Integration Runtime VM cost fell by about 75%</span>. Updated targets versus results:

| Parameter | Target | Result |
| :--------------: | :-------------: | :-------------------------: |
| `Execution SLO` | `99%` | `~100%` |
| `Runtime` | `1 hour` | `45 minutes` |
| `Cost reduction` | `Not specified` | `>75%` |
