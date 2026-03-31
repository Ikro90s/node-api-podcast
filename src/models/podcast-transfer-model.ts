import type { IPodcast } from './podcast-model.js';

export interface PodcastTransferModel {
  statusCode: number;
  body: IPodcast[];
}
