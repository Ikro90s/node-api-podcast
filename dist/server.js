import * as http from 'http';
import { getFilterEpisodes, getListEpisodes, } from './controllers/podcasts-controller.js';
const port = process.env.PORT || 3000;
const server = http.createServer(async (req, res) => {
    // req.url vem com querystring (ex.: /api/filter-episodes?p=other).
    // Aqui usamos apenas o caminho para a comparacao de rota nao falhar.
    const [baseUrl] = req.url?.split('?') || [];
    //listar podcasts
    if (req.method === 'GET' && baseUrl === '/api/list-episodes')
        await getListEpisodes(req, res);
    //filtrar podcasts
    if (req.method === 'GET' && baseUrl === '/api/filter-episodes')
        await getFilterEpisodes(req, res);
});
server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
//# sourceMappingURL=server.js.map