import IServices from './IServices';

export default interface IAppContainer {
  config: object;
  models: object;
  services: IServices;
}
