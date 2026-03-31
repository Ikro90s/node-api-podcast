import * as http from 'http';
import { PodcastController } from './controllers/podcasts-controller.js';
import { Routes } from './routes/routes.js';
import { HttpMethods } from './utils/http-methods.js';

const podcastController = new PodcastController();

const app = async (
  request: http.IncomingMessage,
  response: http.ServerResponse,
) => {
  const [basePath] = request.url?.split('?') || [];
  console.log('basePath:', basePath);
  //listar podcasts
  if (request.method === HttpMethods.GET && basePath === Routes.LIST)
    await podcastController.getListEpisodes(request, response);
  //filtrar podcasts
  if (request.method === HttpMethods.GET && basePath === Routes.FILTER)
    await podcastController.getFilterEpisodes(request, response);
};

export default app;
