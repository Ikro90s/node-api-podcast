import * as http from 'http';
import { PodcastController } from './controllers/podcasts-controller.js';
import { Routes } from './routes/routes.js';
import { HttpMethods } from './utils/http-methods.js';
const podcastController = new PodcastController();
const app = async (request, response) => {
    const [baseUrl] = request.url?.split('?') || [];
    console.log('baseUrl:', baseUrl);
    //listar podcasts
    if (request.method === HttpMethods.GET && baseUrl === Routes.LIST)
        await podcastController.getListEpisodes(request, response);
    //filtrar podcasts
    if (request.method === HttpMethods.GET && baseUrl === Routes.FILTER)
        await podcastController.getFilterEpisodes(request, response);
};
export default app;
//# sourceMappingURL=app.js.map