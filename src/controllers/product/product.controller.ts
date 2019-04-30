import { Request, Response, NextFunction } from 'express';

import IAppContainer from 'src/types/IAppContainer';
import IAppRoute from 'src/types/IAppRoute';
import { IServices } from 'src/services';

class ProductController {
  public static domain: string = '/product';
  public static routes: IAppRoute[] = [
    {
      path: '',
      method: 'get',
      handler: 'listProducts',
      skipAuth: true,
    }
  ];

  public services: IServices;

  constructor(container: IAppContainer) {
    this.services = container.services;
  }

  public listProducts(req: Request, res: Response, next: NextFunction) {
    this.services.productService.get()
      .then((data) => res.send(data))
      .catch(next);
  }
}

export default ProductController;
