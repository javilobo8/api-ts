import express from 'express';

import {default as config} from './config';

import createControllers from './controllers';
import models from './models';
import createServices from './services';

import IAppContainer from './interfaces/IAppContainer';
import IServices from './interfaces/IServices';

const app = express();

const services: IServices = createServices(config, models);
const container: IAppContainer = { config, models, services };

createControllers(app, container);
console.log('createControllers');

export default app;
