import * as http from 'http';
import { getListEpisodes } from './controllers/podcasts-controller.js';
const port = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
    if (req.method === 'GET')
        getListEpisodes(req, res);
});
server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
//# sourceMappingURL=server.js.map