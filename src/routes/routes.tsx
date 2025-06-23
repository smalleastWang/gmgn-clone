import Layout from '@/components/Layout';
import { RouteObject, useRoutes } from 'react-router-dom';
import * as LazyComponents from './lazyComponents';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <LazyComponents.Trading />,
      },
      {
        path: '/new-pair',
        element: <LazyComponents.NewPair />,
      },
      {
        path: '/trend',
        element: <LazyComponents.Trend />,
      },
      {
        path: '/discover',
        element: <LazyComponents.Discover />,
      },
      {
        path: '/monitor',
        element: <LazyComponents.Monitor />,
      },
      {
        path: '/follow',
        element: <LazyComponents.Follow />,
      },
      {
        path: '/holding',
        element: <LazyComponents.Holding />,
      },
    ]
  },
  // 404 页面处理
  {
    path: '*',
    element: <LazyComponents.NotFound />,
  },



  // {
  //   path: '/dashboard',
  //   element: lazy(() => import('@pages/user/re')),
  //   title: '钱包概览',
  // },
  // {
  //   path: '/market',
  //   element: lazy(() => import('@pages/Market')),
  //   title: '市场数据',
  // },
  // {
  //   path: '/copy',
  //   element: lazy(() => import('@pages/CopyTrade')),
  //   title: '复制交易',
  // },
];

// export default routes;

export default function RouterView() {
  return useRoutes(routes);
}