import serverless from 'serverless-http';
import express from 'express';
import { PlanetControllerCreate } from './infrastructure/controllers/create/planet.infrastructure.controllers.create';
import { PlanetControllerGet } from './infrastructure/controllers/get/planet.infrastructure.controllers.get';

const app = express();
app.use(express.json());

const planetControllerCreate = new PlanetControllerCreate();
const planetControllerGet = new PlanetControllerGet();

app.post('/planets/', async (req, res) => await planetControllerCreate.execute(req, res));

app.get('/planets/', async (req, res) => await planetControllerGet.execute(req, res));

export const handler = serverless(app);