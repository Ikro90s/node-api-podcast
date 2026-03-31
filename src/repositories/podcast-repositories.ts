import * as fileSystem from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { type IPodcast } from '../models/podcast-model.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dataFilePath = path.join(__dirname, '../repositories/podcasts.json');

export const findPodcasts = async (
  podcastName?: string,
): Promise<IPodcast[]> => {
  const language = 'utf-8';
  const data = fileSystem.readFileSync(dataFilePath, language);
  let podcasts = JSON.parse(data);

  if (podcastName) {
    podcasts = podcasts.filter((podcast: IPodcast) => {
      return podcast.podcastName === podcastName;
    });
  }

  return podcasts;
};
