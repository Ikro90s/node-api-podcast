import { repositoryPodcast } from '../repositories/podcast-repositories.js';
import { StatusCode } from '../utils/status-code.js';
const serviceListEpisodes = async () => {
    let responseFormat = {
        statusCode: 0,
        body: [],
    };
    const data = await repositoryPodcast();
    responseFormat.statusCode = data.length
        ? StatusCode.OK
        : StatusCode.NO_CONTENT;
    responseFormat.body = data;
    return responseFormat;
};
export { serviceListEpisodes };
//# sourceMappingURL=list-episodes.js.map