import { IncomingMessage, ServerResponse } from 'http';
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
  const content = await serviceFilterEpisodes(req.url);
  res.writeHead(StatusCode.OK, { 'content-type': ContentType.JSON });
  res.end(JSON.stringify(content));
};
