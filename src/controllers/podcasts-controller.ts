import { IncomingMessage, ServerResponse } from 'http';
import type { podcastTransferModel } from '../models/podcast-transfer-model.js';
import serviceFilterEpisodes from '../services/filter-episodes.js';
import { serviceListEpisodes } from '../services/list-episodes.js';
import { ContentType } from '../utils/content-type.js';

export const getListEpisodes = async (
  req: IncomingMessage,
  res: ServerResponse,
) => {
  const content: podcastTransferModel = await serviceListEpisodes();
  res.writeHead(content.statusCode, { 'content-type': ContentType.JSON });
  res.end(JSON.stringify(content.body));
};

export const getFilterEpisodes = async (
  req: IncomingMessage,
  res: ServerResponse,
) => {
  const content: podcastTransferModel = await serviceFilterEpisodes(req.url);
  res.writeHead(content.statusCode, { 'content-type': ContentType.JSON });
  res.end(JSON.stringify(content.body));
};
