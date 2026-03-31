import type { PodcastTransferModel } from '../models/podcast-transfer-model.js';
export declare class PodcastService {
    /**
     * Busca episódios, opcionalmente filtrados pelo parâmetro 'p' na URL.
     */
    getEpisodes(url?: string): Promise<PodcastTransferModel>;
    private parseQuery;
}
declare const serviceFilterEpisodes: (url: string | undefined) => Promise<PodcastTransferModel>;
export default serviceFilterEpisodes;
//# sourceMappingURL=filter-episodes.d.ts.map