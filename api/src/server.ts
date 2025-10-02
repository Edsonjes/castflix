import * as http from 'http';
import { getListEpisodios} from './controllers/podcast-controller';

 const server = http.createServer(async(req: http.IncomingMessage, res:http.ServerResponse) => {
  if (req.method === 'GET'){
    await getListEpisodios (req, res);
  }
});

const port = process.env.PORT || 3333;

server.listen(process.env.PORT, () => {
  console.log(`Server is listening on port ${port}`);
});