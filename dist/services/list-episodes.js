import { PodcastService } from './filter-episodes.js';
/**
 * @deprecated Use PodcastService class directly for better performance.
 */
export const serviceListEpisodes = () => new PodcastService().getEpisodes();
//# sourceMappingURL=list-episodes.js.map