import { repositoryPodcast } from '../repositories/podcast-repostories.js';
const serviceFilterEpisodes = async (podcast) => {
    const data = await repositoryPodcast(podcast);
    return data;
};
export default serviceFilterEpisodes;
//# sourceMappingURL=filter-episodes.js.map