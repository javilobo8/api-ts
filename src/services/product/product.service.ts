import IServiceContainer from 'src/types/IServiceContainer';
import { IModels } from 'src/models';

class ProductService {
  private models: IModels;
  private config: object;

  constructor(container: IServiceContainer) {
    this.config = container.config;
    this.models = container.models;
  }

  public get() {
    return this.models.Product.find().exec();
  }
}

export default ProductService;
