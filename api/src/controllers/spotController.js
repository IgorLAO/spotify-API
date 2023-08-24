import { Router } from "express";
import { Insert, List, ListArtists, ListMusics } from "../repository/spotRepository.js";

let server = Router();

server.get('/list', async (req, resp) => {
    try {
        let data = await List();
        resp.send(data)
    } catch (err) {
        resp.send(err)
    }
});

server.get('/musics', async (req, resp) => {
    try {
        let data = await ListMusics();
        resp.send(data)
    } catch (err) {
        console.log(err);
    };
});

server.get('/artists', async (req, resp) => {
    try {
        let data = await ListArtists()
        resp.send(data)
    } catch (err) {
        resp.send(err)
    }
});




server.post('/list', async (req, resp) => {
    try {
        const add = req.body;
        let data = Insert(add)

        resp.send(data)
    } catch (err) {
        erro: err.message
    }
});

export default server;