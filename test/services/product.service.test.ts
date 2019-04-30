import { expect } from 'chai';

import models from '../../src/models';
import ProductService from '../../src/services/product/product.service';
import testDB from '../test-db';

describe('ProductService', () => {
  const db = testDB();

  const productService = new ProductService({
    config: {},
    models,
  });

  before(() => db.connect());
  after(() => db.disconnect());

  describe('get', () => {
    before(() =>
      new models.Product({
        name: 'test',
        description: 'test',
      }).save()
    );

    after(() => models.Product.deleteMany({}))

    it('should return an array with length 1', async () => {
      const result = await productService.get();
      expect(result).to.have.lengthOf(1);

      expect(result[0].name).to.be.equal('test');
      expect(result[0].description).to.be.equal('test');
    });
  });
});
