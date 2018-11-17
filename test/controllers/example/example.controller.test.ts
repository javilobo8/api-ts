import supertest from 'supertest';

import app from '../../../src/app';

describe('ExampleService', () => {
  describe('GET /example/message', () => {
    it('should return 200 and a message text', () =>
      supertest(app)
        .get('/example/message')
        .then((response) => {
          expect(response).toHaveProperty('status', 200);
          expect(response).toHaveProperty('text', 'Example message');
        })
    );
  });
});
