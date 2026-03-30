import * as fileSystem from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import {} from '../models/podcast-model.js';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pathdata = path.join(__dirname, '../repositories/podcasts.json');
export const repositoryPodcast = async (podcastName) => {
    const data = await fileSystem.readFileSync(pathdata, 'utf-8');
    let jsonFile = JSON.parse(data);
    if (podcastName) {
        jsonFile = jsonFile.filter((podcast) => {
            return podcast.podcastName === podcastName;
        });
    }
    return jsonFile;
};
//# sourceMappingURL=podcast-repostories.js.map