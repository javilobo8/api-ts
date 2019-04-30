import { Express } from 'express';

import IAppContainer from 'src/types/IAppContainer';
import ProductController from './product';

import buildController from './build-controller';

/**
 * Creates all the controllers and routers and pass them to Express.
 *
 * @param {Express} app
 * @param {IAppContainer} container
 */
function createControllers(app: Express, container: IAppContainer): Express {
  console.log('Creating routes');

  buildController(app, container, ProductController);

  console.log('Routes initialized');
  return app;
}

export default createControllers;
