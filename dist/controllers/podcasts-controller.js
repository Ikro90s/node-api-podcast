import { IncomingMessage, ServerResponse } from 'http';
import serviceFilterEpisodes from '../services/filter-episodes.js';
import { serviceListEpisodes } from '../services/list-episodes.js';
export const getListEpisodes = async (req, res) => {
    const content = await serviceListEpisodes();
    res.writeHead(200, { 'content-type': 'application/json' });
    res.end(JSON.stringify(content));
};
export const getFilterEpisodes = async (req, res) => {
    // Extrai somente a parte da query para evitar split manual por parametro fixo.
    const rawQuery = req.url?.split('?')[1] || '';
    // Suporta os dois formatos de parametro: ?p=other e ?podcastName=other.
    const params = new URLSearchParams(rawQuery);
    const queryString = params.get('p') || params.get('podcastName') || '';
    // Loga o valor efetivamente recebido para facilitar debug da rota de filtro.
    console.log('queryString:', queryString);
    const content = await serviceFilterEpisodes(queryString);
    res.writeHead(200, { 'content-type': 'application/json' });
    res.end(JSON.stringify(content));
};
//# sourceMappingURL=podcasts-controller.js.map