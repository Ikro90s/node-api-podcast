import * as http from 'http';
import {
  getFilterEpisodes,
  getListEpisodes,
} from './controllers/podcasts-controller.js';
import { Routes } from './routes/routes.js';
import { HttpMethods } from './utils/http-methods.js';
const port = process.env.PORT || 3000;

const server = http.createServer(
  async (request: http.IncomingMessage, response: http.ServerResponse) => {
    const [baseUrl] = request.url?.split('?') || [];
    console.log('baseUrl:', baseUrl);
    //listar podcasts
    if (request.method === HttpMethods.GET && baseUrl === Routes.LIST)
      await getListEpisodes(request, response);
    //filtrar podcasts
    if (request.method === HttpMethods.GET && baseUrl === Routes.FILTER)
      await getFilterEpisodes(request, response);
  },
);

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
