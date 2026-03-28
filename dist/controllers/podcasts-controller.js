import { IncomingMessage, ServerResponse } from 'http';
export const getListEpisodes = async (req, res) => {
    res.writeHead(200, { 'content-type': 'application/json' });
    res.end(JSON.stringify({
        name: 'ikro',
    }));
};
export default getListEpisodes;
//# sourceMappingURL=podcasts-controller.js.map