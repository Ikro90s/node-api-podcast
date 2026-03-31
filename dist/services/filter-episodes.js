import { repositoryPodcast } from '../repositories/podcast-repositories.js';
import { StatusCode } from '../utils/status-code.js';
const serviceFilterEpisodes = async (url) => {
    let responseFormat = {
        statusCode: 0,
        body: [],
    };
    // Extrai somente a parte da query para evitar split manual por parametro fixo.
    const rawQuery = url?.split('?')[1] || '';
    // Suporta os dois formatos de parametro: ?p=other e ?podcastName=other.
    const params = new URLSearchParams(rawQuery);
    const queryString = params.get('p') || '';
    const data = await repositoryPodcast(queryString);
    responseFormat.statusCode = data.length
        ? StatusCode.OK
        : StatusCode.NO_CONTENT;
    responseFormat.body = data;
    return responseFormat;
};
export default serviceFilterEpisodes;
//# sourceMappingURL=filter-episodes.js.map