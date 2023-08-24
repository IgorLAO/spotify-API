import 'dotenv/config'
import cors from 'cors';
import express from 'express';

import spotController from './controllers/spotController.js';

const server = express();
server.use(cors());
server.use(express.json());

server.listen(process.env.PORT, console.log(`
        a api esta online na porta ${process.env.PORT}
`));

server.use(spotController);


// server.get('/bong', async (request, response) => {
//     response.send('bongada')
// });