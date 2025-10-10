import { repoPodcast } from "../repositorys/podcast-repository";

export const serviceFilterEpisode = async (namePodcast: string) => {
    const data = await repoPodcast(namePodcast);
    return data;
}