import IServiceContainer from '../types/IServiceContainer';
import productService from './product';
import ProductService from './product/product.service';

export interface IServices {
  productService: ProductService;
}

export default function createServices(servicesContainer: IServiceContainer) {
  return {
    productService: productService(servicesContainer),
  };
}
