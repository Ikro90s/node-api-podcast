import { IncomingMessage, ServerResponse } from 'http';
import { PodcastService } from '../services/filter-episodes.js';
import { ContentType } from '../utils/content-type.js';

export class PodcastController {
  constructor(private service = new PodcastService()) {}

  public getListEpisodes = async (_: IncomingMessage, res: ServerResponse) => {
    const content = await this.service.getEpisodes();
    this.send(res, content);
  };

  public getFilterEpisodes = async (
    req: IncomingMessage,
    res: ServerResponse,
  ) => {
    const content = await this.service.getEpisodes(req.url);
    this.send(res, content);
  };

  private send(res: ServerResponse, data: { statusCode: number; body: any }) {
    res.writeHead(data.statusCode, { 'Content-Type': ContentType.JSON });
    res.end(JSON.stringify(data.body));
  }
}

// Exemplo de uso no roteador:
// const controller = new PodcastController();
// router.get('/path', (req, res) => controller.getListEpisodes(req, res));
