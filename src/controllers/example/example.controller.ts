import { Request, Response } from 'express';

import IAppContainer from 'src/interfaces/IAppContainer';
import ExampleService from 'src/services/example.service';

class ExampleController {
  public path = '/example'; // this could be on routes

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
