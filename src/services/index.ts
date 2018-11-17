import ExampleService from './example.service';

function createServices(config: object, models: object) {
  return {
    exampleService: new ExampleService(config, models),
  };
}

export default createServices;
