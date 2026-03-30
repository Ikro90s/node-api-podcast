import type { Podcast } from '../models/podcast-model.js';
import { repositoryPodcast } from '../repositories/podcast-repostories.js';

const serviceFilterEpisodes = async (podcast: string): Promise<Podcast[]> => {
  const data = await repositoryPodcast(podcast);
  return data;
};

export default serviceFilterEpisodes;
