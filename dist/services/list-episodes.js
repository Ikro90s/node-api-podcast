import { repositoryPodcast } from '../repositories/podcast-repostories.js';
const serviceListEpisodes = async () => {
    const data = await repositoryPodcast();
    return data;
};
export { serviceListEpisodes };
//# sourceMappingURL=list-episodes.js.map