import express from 'express';

import database from './database';

import {default as config} from './config';
import models from './models';

import createServices from './services';
import createControllers from './controllers';

const services = createServices({ config, models });

const app = express();

createControllers(app, { services, config, models });

export default app;
