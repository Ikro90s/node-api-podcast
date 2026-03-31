import type { IPodcast } from './podcast-model.js';

export interface podcastTransferModel {
  statusCode: number;
  body: IPodcast[];
}
