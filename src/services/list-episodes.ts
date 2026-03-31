import { PodcastService } from './filter-episodes.js';

export const serviceListEpisodes = () => new PodcastService().getEpisodes();
