import { Express, Router } from 'express';

import IAppContainer from 'src/interfaces/IAppContainer';
import IAppRoute from 'src/interfaces/IRoute';

import ExampleController from './example/example.controller';
import ExampleRoutes from './example/example.routes';

/**
 * Creates a router from routes and binds to a controller.
 *
 * @param {Express} app
 * @param {Object} controller
 * @param {IAppRoute[]} routes
 */
function createRouterFromController(app: Express, controller: any, routes: IAppRoute[]) {
  const controllerRouter = new (Router as any)();

  routes.forEach((route: IAppRoute) => {
    const routeArguments = [
      ...(route.middlewares || []),
      controller[route.bind].bind(controller),
    ];

    controllerRouter[route.method](route.path, routeArguments);

    // Log
    const bindText = `${controller.constructor.name}::${route.bind}`;
    const routeText = `${route.method.toUpperCase()} ${controller.path + route.path}`;
    console.log(`Bound route ${routeText} to ${bindText}`);
  });

  app.use(controller.path, controllerRouter);
}

/**
 * Creates all the controllers and routers and pass them to Express.
 *
 * @param {Express} app
 * @param {IAppContainer} container
 */
function createControllers(app: Express, container: IAppContainer) {
  console.log('Creating routes');
  const exampleController = new ExampleController(container);

  createRouterFromController(app, exampleController, ExampleRoutes);
  console.log('Routes initialized');
  return app;
}

export default createControllers;
