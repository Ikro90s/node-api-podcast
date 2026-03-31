import { IncomingMessage, ServerResponse } from 'http';
import type { filterPodcastModel } from '../models/filter-podcast-model.js';
import serviceFilterEpisodes from '../services/filter-episodes.js';
import { serviceListEpisodes } from '../services/list-episodes.js';
import { ContentType } from '../utils/content-type.js';
import { StatusCode } from '../utils/status-code.js';

export const getListEpisodes = async (
  req: IncomingMessage,
  res: ServerResponse,
) => {
  const content = await serviceListEpisodes();
  res.writeHead(StatusCode.OK, { 'content-type': ContentType.JSON });
  res.end(JSON.stringify(content));
};

export const getFilterEpisodes = async (
  req: IncomingMessage,
  res: ServerResponse,
) => {
  const content: filterPodcastModel = await serviceFilterEpisodes(req.url);
  res.writeHead(content.statusCode, { 'content-type': ContentType.JSON });
  res.end(JSON.stringify(content.body));
};
