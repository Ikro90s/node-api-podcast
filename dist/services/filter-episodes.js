import { findPodcasts } from '../repositories/podcast-repositories.js';
import { StatusCode } from '../utils/status-code.js';
export class PodcastService {
    /**
     * Busca episódios, opcionalmente filtrados pelo parâmetro 'p' na URL.
     */
    async getEpisodes(url) {
        const query = this.parseQuery(url);
        const data = await findPodcasts(query);
        return {
            statusCode: data.length ? StatusCode.OK : StatusCode.NO_CONTENT,
            body: data,
        };
    }
    parseQuery(url) {
        const params = new URLSearchParams(url?.split('?')[1] ?? '');
        return params.get('p') ?? '';
    }
}
// Mantendo compatibilidade com exportação padrão se necessário,
// mas o ideal é instanciar a classe no controller.
const serviceFilterEpisodes = (url) => new PodcastService().getEpisodes(url);
export default serviceFilterEpisodes;
//# sourceMappingURL=filter-episodes.js.map