import { IncomingMessage, ServerResponse } from 'http';
import serviceFilterEpisodes from '../services/filter-episodes.js';
import { serviceListEpisodes } from '../services/list-episodes.js';

export const getListEpisodes = async (
  req: IncomingMessage,
  res: ServerResponse,
) => {
  const content = await serviceListEpisodes();
  res.writeHead(200, { 'content-type': 'application/json' });
  res.end(JSON.stringify(content));
};

export const getFilterEpisodes = async (
  req: IncomingMessage,
  res: ServerResponse,
) => {
  const content = await serviceFilterEpisodes('Flow Games');
  res.writeHead(200, { 'content-type': 'application/json' });
  res.end(JSON.stringify(content));
};
