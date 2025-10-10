import * as http from 'http';
import { getFilterEpisode, getListEpisodios } from './controllers/podcast-controller';

const server = http.createServer(async (req: http.IncomingMessage, res: http.ServerResponse) => {
  if (req.method === 'GET' && req.url === '/api/list') {
    await getListEpisodios(req, res);
  }
  if (req.method === 'GET' && req.url?.startsWith('/api/episode')) {
    await getFilterEpisode(req, res);
  }

  return res.end();

});

const port = process.env.PORT || 3333;

server.listen(process.env.PORT, () => {
  console.log(`Server is listening on port ${port}`);
});