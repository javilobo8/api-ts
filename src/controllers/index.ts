import { Express, Router } from 'express';

import IAppContainer from 'src/interfaces/IAppContainer';
import IAppRoute from 'src/interfaces/IRoute';

import ExampleController from './example.controller';

/**
 * Creates a router from routes and binds to a controller.
 *
 * @param {Express} app
 * @param {IAppContainer} container
 * @param {IAppRoute[]} Controller
 */
function buildController(app: Express, container: IAppContainer, Controller: any): void {
  const controller = new Controller(container);
  const router = new (Router as any)();

  Controller.routes.forEach((route: IAppRoute) => {
    const middlewares = [
      ...(route.middlewares || []),
    ];

    router[route.method](route.path, ...middlewares, controller[route.handler].bind(controller));

    const bindText = `${Controller.name}::${route.handler}`;
    const routeText = `${route.method.toUpperCase()} ${Controller.domain + route.path}`;
    console.log(`Bound route ${routeText} to ${bindText}`);
  });

  app.use(Controller.domain, router);
}

/**
 * Creates all the controllers and routers and pass them to Express.
 *
 * @param {Express} app
 * @param {IAppContainer} container
 */
function createControllers(app: Express, container: IAppContainer): Express {
  console.log('Creating routes');

  buildController(app, container, ExampleController);

  console.log('Routes initialized');
  return app;
}

export default createControllers;
