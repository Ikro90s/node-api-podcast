import { IncomingMessage, ServerResponse } from 'http';
import { PodcastService } from '../services/filter-episodes.js';
import { ContentType } from '../utils/content-type.js';

export class PodcastController {
  constructor(private podcastService = new PodcastService()) {}

  public getListEpisodes = async (
    _: IncomingMessage,
    response: ServerResponse,
  ) => {
    const content = await this.podcastService.getEpisodes();
    this.sendResponse(response, content);
  };

  public getFilterEpisodes = async (
    request: IncomingMessage,
    response: ServerResponse,
  ) => {
    const content = await this.podcastService.getEpisodes(request.url);
    this.sendResponse(response, content);
  };

  private sendResponse(
    response: ServerResponse,
    data: { statusCode: number; body: any },
  ) {
    response.writeHead(data.statusCode, { 'Content-Type': ContentType.JSON });
    response.end(JSON.stringify(data.body));
  }
}
