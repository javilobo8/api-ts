import ExampleService from '../../src/services/example.service';

describe('ExampleService', () => {
  const exampleService = new ExampleService({}, {});

  describe('get', () => {
    it('should return a Promise with the message', async () => {
      const result = await exampleService.get();
      expect(result).toHaveProperty('message', 'Example message');
    });
  });
});
