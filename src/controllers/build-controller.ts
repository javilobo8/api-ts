import { Express, Router } from 'express';
import IAppContainer from '../types/IAppContainer';
import IAppRoute from '../types/IAppRoute';

export default function buildController(app: Express, container: IAppContainer, Controller: any): void {
  const controller = new Controller(container);
  const router = new (Router as any)();

  Controller.routes.forEach((route: IAppRoute) => {
    const middlewares: any[] = [];

    if (!route.skipAuth) {
      // middlewares.push(authMiddleware);
    }

    router[route.method](route.path, ...middlewares, controller[route.handler].bind(controller));

    const bindText = `${Controller.name}::${route.handler}`;
    const routeText = `${route.method.toUpperCase()} ${Controller.domain + route.path}`;
    console.log(`Bound route ${routeText} to ${bindText}`);
  });

  app.use(Controller.domain, router);
}
