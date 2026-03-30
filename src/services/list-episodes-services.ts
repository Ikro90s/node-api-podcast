import type { Podcast } from '../models/podcast-model.js';
import { repositoryPodcast } from '../repositories/podcast-repostories.js';

const serviceListEpisodes = async (): Promise<Podcast[]> => {
  const data = await repositoryPodcast();
  return data;
};

export { serviceListEpisodes };
