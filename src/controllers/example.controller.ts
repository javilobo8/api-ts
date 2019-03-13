import { Request, Response } from 'express';

import IAppContainer from 'src/interfaces/IAppContainer';
import IAppRoute from 'src/interfaces/IRoute';
import ExampleService from 'src/services/example.service';

class ExampleController {
  public static domain: string = '/example';
  public static routes: IAppRoute[] = [
    {
      path: '/message',
      method: 'get',
      handler: 'getExampleMessage',
    },
  ];

  private exampleService: ExampleService;

  constructor(container: IAppContainer) {
    this.exampleService = container.services.exampleService;
  }

  public getExampleMessage(req: Request, res: Response) {
    this.exampleService.get()
      .then((result) => {
        res.send(result.message);
      });
  }
}

export default ExampleController;
