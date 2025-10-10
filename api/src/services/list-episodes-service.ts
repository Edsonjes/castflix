import { repoPodcast } from "../repositorys/podcast-repository";

export const servicelistEpisodes = async () => {
    const data =  await repoPodcast();
      return data;
}

