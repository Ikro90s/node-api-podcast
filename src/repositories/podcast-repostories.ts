import * as fileSystem from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { type IPodcast } from '../models/podcast-model.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pathdata = path.join(__dirname, '../repositories/podcasts.json');

export const repositoryPodcast = async (
  podcastName?: string,
): Promise<IPodcast[]> => {
  const language = 'utf-8';
  const data = fileSystem.readFileSync(pathdata, language);
  let jsonFile = JSON.parse(data);

  if (podcastName) {
    jsonFile = jsonFile.filter((podcast: IPodcast) => {
      return podcast.podcastName === podcastName;
    });
  }

  return jsonFile;
};
