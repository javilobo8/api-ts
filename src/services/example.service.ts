import Promise from 'bluebird';

class ExampleService {
  private models: object;
  private config: object;
  private message: string;

  constructor(config: object, models: object) {
    this.config = config;
    this.models = models;
    this.message = 'Example message';
  }

  public get() {
    return Promise.resolve({message: this.message});
  }
}

export default ExampleService;
