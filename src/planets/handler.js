// import serverless from 'serverless-http';
// import express from 'express';
// import { PlanetController } from './infrastructure/controllers/create/planet.infrastructure.controllers.create';

// const app = express();
// app.use(express.json());

// const planetController = new PlanetController();

// app.post('/planets', async (req, res) => await planetController.create(req, res));

// export const handler = serverless(app);
require('ts-node').register();
require('tsconfig-paths/register');

const serverless = require('serverless-http');
const express = require('express');
const { PlanetControllerCreate } = require('./infrastructure/controllers/create/planet.infrastructure.controllers.create');
const { PlanetControllerGet } = require('./infrastructure/controllers/get/planet.infrastructure.controllers.get');

const app = express();
app.use(express.json());

const planetControllerCreate = new PlanetControllerCreate();
const planetControllerGet = new PlanetControllerGet();

app.post('/planets', async (req, res) => await planetControllerCreate.execute(req, res));

app.get('/planets', async (req, res) => await planetControllerGet.execute(req, res));

module.exports.handler = serverless(app);
