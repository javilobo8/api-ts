import IAppRoute from 'src/interfaces/IRoute';

const routes: IAppRoute[] = [
  {
    path: '/message',
    method: 'get',
    bind: 'getExampleMessage',
  },
];

export default routes;
