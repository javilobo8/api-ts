export default interface IAppRoute {
  path: string;
  method: string;
  bind: string;
  middlewares?: any[];
}
