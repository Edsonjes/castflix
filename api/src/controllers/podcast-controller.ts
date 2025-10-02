import { IncomingMessage, ServerResponse } from "http";


export const getListEpisodios = async (req: IncomingMessage, res: ServerResponse) =>{
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify([
         {
            podecastName: "Flow",
            nomeEpisodio: "DANIEL LOPEZ - Flow #492",
            categorias: ["humor","mentalidade","bodybuild"]
        },
        {
            podecastName: "Flow",
            nomeEpisodio: "ARTHUR PETRY - Flow #491",
            categorias: ["humor,mentalidade","bodybuild"]
        }
      ]));
}