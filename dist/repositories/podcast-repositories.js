import * as fileSystem from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import {} from '../models/podcast-model.js';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataFilePath = path.join(__dirname, '../repositories/podcasts.json');
export const findPodcasts = async (podcastName) => {
    const language = 'utf-8';
    const data = fileSystem.readFileSync(dataFilePath, language);
    let podcasts = JSON.parse(data);
    if (podcastName) {
        podcasts = podcasts.filter((podcast) => {
            return podcast.podcastName === podcastName;
        });
    }
    return podcasts;
};
//# sourceMappingURL=podcast-repositories.js.map