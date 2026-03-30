interface IPodcast {
  videoId: string;
  podcastName: string;
  episode: string;
  category: string[];
}

export type Podcast = IPodcast;

export type { IPodcast };
