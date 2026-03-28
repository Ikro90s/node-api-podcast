# Podcast Manager

### Descricao

Um app estilo netflix onde eu possa centralizar diferentes episódios de podcasts separados por categoria

### Dominio

Podcasts feito em vídeos

### Features

- Listar os podcasts em sessões de categorias
- [Saude, Fitness Mentalidade, Humor]
- Filtrar episódios por nome de podcast

## como

#### Feature

- Listar os podcasts em sessões de categorias

### Como vou implementar

Vou retornar em uma api rest o nome do podcast nome do episódio, imagem de capa, link, categoria

Método get

```js
[
  {
    videoId: 'OqK6r9Q8A4s',
    podcastName: 'flow',
    episode: 'RENATO CARIANI E JULIO BALESTRIN - Flow Podcast #300',
    cover: 'https://i.ytimg.com/vi/OqK6r9Q8A4s/maxresdefault.jpg',
    link: 'https://www.youtube.com/watch?v=OqK6r9Q8A4s',
    category: ['saúde', 'fitness', 'bodybuilder'],
  },
  {
    videoId: '72OibV7_ZAE',
    podcastName: 'flow',
    episode: 'SÉRGIO SACANI (SPACETODAY) - Flow Podcast #350',
    cover: 'https://i.ytimg.com/vi/72OibV7_ZAE/maxresdefault.jpg',
    link: 'https://www.youtube.com/watch?v=72OibV7_ZAE',
    category: ['ciência', 'astronomia', 'educação'],
  },
  {
    videoId: '8TmVj_yK_hU',
    podcastName: 'flow',
    episode: 'GAULES - Flow Podcast #200',
    cover: 'https://i.ytimg.com/vi/8TmVj_yK_hU/maxresdefault.jpg',
    link: 'https://www.youtube.com/watch?v=8TmVj_yK_hU',
    category: ['games', 'esports', 'tecnologia'],
  },
  {
    videoId: 'fXkX6yHl2wY',
    podcastName: 'flow',
    episode: 'RONALDO FENÔMENO - Flow Podcast #105',
    cover: 'https://i.ytimg.com/vi/fXkX6yHl2wY/maxresdefault.jpg',
    link: 'https://www.youtube.com/watch?v=fXkX6yHl2wY',
    category: ['esportes', 'futebol', 'entrevista'],
  },
  {
    videoId: '8fN_Z3gGZcw',
    podcastName: 'flow',
    episode: 'ARTHUR PÊTRI E TIAGO CARVALHO (A DERIVA) - Flow Podcast #410',
    cover: 'https://i.ytimg.com/vi/8fN_Z3gGZcw/maxresdefault.jpg',
    link: 'https://www.youtube.com/watch?v=8fN_Z3gGZcw',
    category: ['comédia', 'humor', 'entretenimento'],
  },
  {
    videoId: '5g19XlXwRGE',
    podcastName: 'flow',
    episode: 'FELIPE NETO - Flow Podcast #502',
    cover: 'https://i.ytimg.com/vi/5g19XlXwRGE/maxresdefault.jpg',
    link: 'https://www.youtube.com/watch?v=5g19XlXwRGE',
    category: ['youtube', 'internet', 'entretenimento'],
  },
  {
    videoId: 'wJ9pZq2oXp0',
    podcastName: 'flow',
    episode: 'PAULO MUZY - Flow Podcast #288',
    cover: 'https://i.ytimg.com/vi/wJ9pZq2oXp0/hq720.jpg',
    link: 'https://www.youtube.com/watch?v=wJ9pZq2oXp0',
    category: ['saúde', 'medicina', 'bodybuilder'],
  },
  {
    videoId: 'xLwP3_V5T4E',
    podcastName: 'flow',
    episode: 'MANO BROWN - Flow Podcast #250',
    cover: 'https://i.ytimg.com/vi/xLwP3_V5T4E/hq720.jpg',
    link: 'https://www.youtube.com/watch?v=xLwP3_V5T4E',
    category: ['música', 'rap', 'cultura'],
  },
];
```
