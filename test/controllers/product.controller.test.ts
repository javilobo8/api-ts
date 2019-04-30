import { expect } from 'chai';
import supertest, { Response } from 'supertest';

import app from '../../src/app';
import models from '../../src/models';
import testDB from '../test-db';

describe('ProductController', () => {
  const db = testDB();

  before(() => db.connect());
  after(() => db.disconnect());

  describe('GET /product', () => {
    let response: Response;

    before(async () => {
      new models.Product({
        name: 'test',
        description: 'test',
      }).save();

      response = await supertest(app)
        .get('/product');
    });

    after(() => models.Product.deleteMany({}))

    it('should return an array with length 1', async () => {
      expect(response.body).to.have.lengthOf(1);

      expect(response.body[0].name).to.be.equal('test');
      expect(response.body[0].description).to.be.equal('test');
    });
  });
});
