import type { IPodcast } from './podcast-model.js';

export interface filterPodcastModel {
  statusCode: number;
  body: IPodcast[];
}
