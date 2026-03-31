import { IncomingMessage, ServerResponse } from 'http';
import { PodcastService } from '../services/filter-episodes.js';
export declare class PodcastController {
    private service;
    constructor(service?: PodcastService);
    /**
     * Uso de arrow functions para preservar o contexto do 'this'.
     */
    getListEpisodes: (_: IncomingMessage, res: ServerResponse) => Promise<void>;
    getFilterEpisodes: (req: IncomingMessage, res: ServerResponse) => Promise<void>;
    private send;
}
//# sourceMappingURL=podcasts-controller.d.ts.map