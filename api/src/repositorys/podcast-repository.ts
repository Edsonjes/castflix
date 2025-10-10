import { promises } from 'dns';
import fs from 'fs';
import path from 'path';
import { Podcast } from '../model/PodCastModel';

const pathJson = path.join(__dirname,"../repositorys/podcast.json");

export const repoPodcast = async (podcastName? : string): Promise<Podcast[]> => {
    const rawdata = await fs.readFileSync(pathJson,'utf-8');
    let jsonFile = JSON.parse(rawdata);

    if(podcastName){
        jsonFile = jsonFile.filter((podcast:Podcast) => podcast.podcastName === podcastName);
    }
    return jsonFile; 
}