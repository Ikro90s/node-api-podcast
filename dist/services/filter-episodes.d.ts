import type { podcastTransferModel } from '../models/podcast-transfer-model.js';
export declare class PodcastService {
    /**
     * Busca episódios, opcionalmente filtrados pelo parâmetro 'p' na URL.
     */
    getEpisodes(url?: string): Promise<podcastTransferModel>;
    private parseQuery;
}
declare const serviceFilterEpisodes: (url: string | undefined) => Promise<podcastTransferModel>;
export default serviceFilterEpisodes;
//# sourceMappingURL=filter-episodes.d.ts.map