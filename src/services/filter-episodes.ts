import type { podcastTransferModel } from '../models/podcast-transfer-model.js';
import { repositoryPodcast } from '../repositories/podcast-repositories.js';
import { StatusCode } from '../utils/status-code.js';

export class PodcastService {
  /**
   * Busca episódios, opcionalmente filtrados pelo parâmetro 'p' na URL.
   */
  public async getEpisodes(url?: string): Promise<podcastTransferModel> {
    const query = this.parseQuery(url);
    const data = await repositoryPodcast(query);

    return {
      statusCode: data.length ? StatusCode.OK : StatusCode.NO_CONTENT,
      body: data,
    };
  }

  private parseQuery(url?: string): string {
    const params = new URLSearchParams(url?.split('?')[1] ?? '');
    return params.get('p') ?? '';
  }
}

// Mantendo compatibilidade com exportação padrão se necessário,
// mas o ideal é instanciar a classe no controller.
const serviceFilterEpisodes = (url: string | undefined) =>
  new PodcastService().getEpisodes(url);
export default serviceFilterEpisodes;
