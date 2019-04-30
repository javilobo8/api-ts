import ProductService from './product.service';
import IServiceContainer from 'src/types/IServiceContainer';

export default (serviceContainer: IServiceContainer) => new ProductService(serviceContainer);
