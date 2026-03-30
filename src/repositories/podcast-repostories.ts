import * as fileSystem from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

interface Podcast {
  videoId: string;
  podcastName: string;
  episode: string;
  category: string[];
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pathdata = path.join(__dirname, '../repositories/podcasts.json');

export const repositoryPodcast = async (): Promise<Podcast[]> => {
  const data = await fileSystem.readFileSync(pathdata, 'utf-8');
  const jsonFile = JSON.parse(data);
  return jsonFile;
};
