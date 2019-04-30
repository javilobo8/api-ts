import { Model } from 'mongoose';
import Product, { IProduct } from './Product';

export interface IModels {
  Product: Model<IProduct>;
}

export default {
  Product,
};
