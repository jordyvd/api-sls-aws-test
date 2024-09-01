import serverless from 'serverless-http';
import express from 'express';
import { PeopleControllerTranslate } from './infrastructure/controllers/translate/people.infrastructure.controllers.translate';

const app = express();
app.use(express.json());

const peopleControllerTranslate = new PeopleControllerTranslate();

app.get('/people/:id?', async (req, res) => await peopleControllerTranslate.execute(req, res));

export const handler = serverless(app);