export default interface IAppRoute {
  path: string;
  method: string;
  handler: string;
  middlewares?: any[];
  skipAuth: boolean;
}
