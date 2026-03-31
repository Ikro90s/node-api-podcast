import * as http from 'http';
import {
  getFilterEpisodes,
  getListEpisodes,
} from './controllers/podcasts-controller.js';
import { Routes } from './routes/routes.js';
import { HttpMethods } from './utils/http-methods.js';

const app = async (
  request: http.IncomingMessage,
  response: http.ServerResponse,
) => {
  const [baseUrl] = request.url?.split('?') || [];
  console.log('baseUrl:', baseUrl);
  //listar podcasts
  if (request.method === HttpMethods.GET && baseUrl === Routes.LIST)
    await getListEpisodes(request, response);
  //filtrar podcasts
  if (request.method === HttpMethods.GET && baseUrl === Routes.FILTER)
    await getFilterEpisodes(request, response);
};

export default app;
