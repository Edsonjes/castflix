import { IncomingMessage, ServerResponse } from "http";
import { servicelistEpisodes } from '../services/list-episodes-service';
import { serviceFilterEpisode } from "../services/filter-episode-service";


export const getListEpisodios = async (req: IncomingMessage, res: ServerResponse) => {
    const data = await servicelistEpisodes();
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(data));
}

export const getFilterEpisode = async (req: IncomingMessage, res: ServerResponse) => {
    const data = await serviceFilterEpisode("Flow");
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(data));
}