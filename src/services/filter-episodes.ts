import type { filterPodcastModel } from '../models/filter-podcast-model.js';
import { repositoryPodcast } from '../repositories/podcast-repostories.js';

const serviceFilterEpisodes = async (
  url: string | undefined,
): Promise<filterPodcastModel> => {
  let responseFormat: filterPodcastModel = {
    statusCode: 0,
    body: [],
  };
  // Extrai somente a parte da query para evitar split manual por parametro fixo.
  const rawQuery = url?.split('?')[1] || '';

  // Suporta os dois formatos de parametro: ?p=other e ?podcastName=other.
  const params = new URLSearchParams(rawQuery);
  const queryString = params.get('p') || '';
  const data = await repositoryPodcast(queryString);

  if (data.length !== 0) {
    responseFormat.statusCode = 200;
    responseFormat.body = data;
  } else {
    responseFormat.statusCode = 204;
  }
  return responseFormat;
};

export default serviceFilterEpisodes;
