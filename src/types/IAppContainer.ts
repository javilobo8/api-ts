import { IServices } from "src/services";

export default interface IAppContainer {
  config: object;
  models: object;
  services: IServices;
}
