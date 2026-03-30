import * as http from 'http';
import {
  getFilterEpisodes,
  getListEpisodes,
} from './controllers/podcasts-controller.js';
const port = process.env.PORT || 3000;

const server = http.createServer(
  async (req: http.IncomingMessage, res: http.ServerResponse) => {
    //listar podcasts
    if (req.method === 'GET' && req.url === '/api/list-episodes')
      await getListEpisodes(req, res);
    //filtrar podcasts
    if (req.method === 'GET' && req.url === '/api/filter-episodes')
      await getFilterEpisodes(req, res);
  },
);

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
