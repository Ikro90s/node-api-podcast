import { IncomingMessage, ServerResponse } from 'http';
import { PodcastService } from '../services/filter-episodes.js';
import { ContentType } from '../utils/content-type.js';
export class PodcastController {
    service;
    constructor(service = new PodcastService()) {
        this.service = service;
    }
    /**
     * Uso de arrow functions para preservar o contexto do 'this'.
     */
    getListEpisodes = async (_, res) => {
        const content = await this.service.getEpisodes();
        this.send(res, content);
    };
    getFilterEpisodes = async (req, res) => {
        const content = await this.service.getEpisodes(req.url);
        this.send(res, content);
    };
    send(res, data) {
        res.writeHead(data.statusCode, { 'Content-Type': ContentType.JSON });
        res.end(JSON.stringify(data.body));
    }
}
// Exemplo de uso no roteador:
// const controller = new PodcastController();
// router.get('/path', (req, res) => controller.getListEpisodes(req, res));
//# sourceMappingURL=podcasts-controller.js.map