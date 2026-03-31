<h1 align="center">Node API Podcast</h1>

<p align="center">
  <strong>Uma API REST em Node.js + TypeScript para listar e filtrar episodios de podcasts.</strong>
</p>

<p align="center">
  <img alt="Node" src="https://img.shields.io/badge/Node.js-HTTP%20Nativo-146356?style=for-the-badge" />
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-Strict%20Mode-0f766e?style=for-the-badge" />
  <img alt="Arquitetura" src="https://img.shields.io/badge/Arquitetura-Controller%20Service%20Repository-d96c06?style=for-the-badge" />
</p>

---

## Visao Geral

Este projeto implementa uma API simples e didatica para catalogo de podcasts, com foco em clareza arquitetural.

A aplicacao foi estruturada em camadas para facilitar manutencao, leitura e evolucao:

- Server: inicia o servidor HTTP
- App Router: decide rota e metodo HTTP
- Controller: controla resposta HTTP
- Service: aplica regra de negocio
- Repository: acessa dados em arquivo JSON

---

## Arquitetura

### Fluxo de requisicao

```text
Request HTTP
  -> app.ts (roteamento)
    -> PodcastController
      -> PodcastService
        -> findPodcasts (repositorio)
          -> podcasts.json
      <- statusCode + body
    <- resposta JSON
```

### Camadas do projeto

- src/server.ts
  - Sobe o servidor na porta definida por PORT ou 3000.
- src/app.ts
  - Faz o roteamento com base em metodo e rota.
- src/controllers/podcasts-controller.ts
  - Usa o service e responde com Content-Type JSON.
- src/services/filter-episodes.ts
  - Extrai query param p e monta o retorno tipado.
- src/repositories/podcast-repositories.ts
  - Le e filtra dados de src/repositories/podcasts.json.

---

## Endpoints da API

### 1) Listar episodios

- Metodo: GET
- Rota: /api/list-episodes
- Descricao: retorna todos os episodios

Exemplo:

```bash
curl -i http://localhost:3000/api/list-episodes
```

### 2) Filtrar por nome do podcast

- Metodo: GET
- Rota: /api/filter-episodes
- Query param: p
- Descricao: filtra por igualdade exata no campo podcastName

Exemplo:

```bash
curl -i "http://localhost:3000/api/filter-episodes?p=Podpah"
```

---

## Contratos de Dados

### Modelo de episodio

```ts
interface IPodcast {
  videoId: string;
  podcastName: string;
  episode: string;
  category: string[];
}
```

### Modelo de transferencia

```ts
interface PodcastTransferModel {
  statusCode: number;
  body: IPodcast[];
}
```

---

## Estrutura de Pastas

```text
src/
  app.ts
  server.ts
  controllers/
    podcasts-controller.ts
  models/
    podcast-model.ts
    podcast-transfer-model.ts
  repositories/
    podcast-repositories.ts
    podcasts.json
  routes/
    routes.ts
  services/
    filter-episodes.ts
    list-episodes.ts
  utils/
    content-type.ts
    http-methods.ts
    status-code.ts
```

---

## Como Executar

### Requisitos

- Node.js
- pnpm

### Instalacao

```bash
pnpm install
```

### Desenvolvimento

```bash
pnpm run start:dev
```

### Watch mode

```bash
pnpm run start:watch
```

### Build TypeScript

```bash
pnpm run build
```

---

## Scripts Disponiveis

- start:dev
  - Inicia com tsx e console-ninja
- start:watch
  - Inicia com nodemon observando arquivos TS
- build
  - Compila TypeScript para dist
- start:dist
  - Executa o build

---

## Exemplo de Resposta

```json
[
  {
    "videoId": "p4C5089vL8s",
    "podcastName": "Podpah",
    "episode": "IGAO E MITICO - A HISTORIA DO MAIOR PODCAST DO BRASIL",
    "category": ["entretenimento", "humor", "lifestyle"]
  }
]
```

---

## Melhorias Futuras

- Adicionar tratamento de erros padronizado
- Criar endpoint de health check
- Permitir filtro parcial e case-insensitive
- Adicionar testes unitarios para service e controller
- Evoluir para persistencia em banco de dados

---

<p align="center">
  Feito para ser uma base limpa, elegante e didatica para estudos de backend com Node.js e TypeScript.
</p>
