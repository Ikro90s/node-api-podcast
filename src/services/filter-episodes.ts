import type { Podcast } from '../models/podcast-model.js';
import { repositoryPodcast } from '../repositories/podcast-repostories.js';

const serviceFilterEpisodes = async (
  url: string | undefined,
): Promise<Podcast[]> => {
  // Extrai somente a parte da query para evitar split manual por parametro fixo.
  const rawQuery = url?.split('?')[1] || '';

  // Suporta os dois formatos de parametro: ?p=other e ?podcastName=other.
  const params = new URLSearchParams(rawQuery);
  const queryString = params.get('p') || '';
  const data = await repositoryPodcast(queryString);
  return data;
};

export default serviceFilterEpisodes;
