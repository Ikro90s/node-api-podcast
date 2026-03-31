import type { podcastTransferModel } from '../models/podcast-transfer-model.js';
import { repositoryPodcast } from '../repositories/podcast-repositories.js';
import { StatusCode } from '../utils/status-code.js';

const serviceListEpisodes = async (): Promise<podcastTransferModel> => {
  let responseFormat: podcastTransferModel = {
    statusCode: 0,
    body: [],
  };

  const data = await repositoryPodcast();

  responseFormat.statusCode = data.length
    ? StatusCode.OK
    : StatusCode.NO_CONTENT;
  responseFormat.body = data;

  return responseFormat;
};

export { serviceListEpisodes };
