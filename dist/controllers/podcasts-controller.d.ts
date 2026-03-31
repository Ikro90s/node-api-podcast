import { IncomingMessage, ServerResponse } from 'http';
import { PodcastService } from '../services/filter-episodes.js';
export declare class PodcastController {
    private podcastService;
    constructor(podcastService?: PodcastService);
    getListEpisodes: (_: IncomingMessage, response: ServerResponse) => Promise<void>;
    getFilterEpisodes: (request: IncomingMessage, response: ServerResponse) => Promise<void>;
    private sendResponse;
}
//# sourceMappingURL=podcasts-controller.d.ts.map