import { IncomingMessage, ServerResponse } from 'http';
import { PodcastService } from '../services/filter-episodes.js';
import { ContentType } from '../utils/content-type.js';
export class PodcastController {
    podcastService;
    constructor(podcastService = new PodcastService()) {
        this.podcastService = podcastService;
    }
    getListEpisodes = async (_, response) => {
        const content = await this.podcastService.getEpisodes();
        this.sendResponse(response, content);
    };
    getFilterEpisodes = async (request, response) => {
        const content = await this.podcastService.getEpisodes(request.url);
        this.sendResponse(response, content);
    };
    sendResponse(response, data) {
        response.writeHead(data.statusCode, { 'Content-Type': ContentType.JSON });
        response.end(JSON.stringify(data.body));
    }
}
// Exemplo de uso no roteador:
// const controller = new PodcastController();
// router.get('/path', (req, res) => controller.getListEpisodes(req, res));
//# sourceMappingURL=podcasts-controller.js.map