import * as fileSystem from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pathdata = path.join(__dirname, '../repositories/podcasts.json');
export const repositoryPodcast = async () => {
    const data = await fileSystem.readFileSync(pathdata, 'utf-8');
    const jsonFile = JSON.parse(data);
    return jsonFile;
};
//# sourceMappingURL=podcast-repostories.js.map