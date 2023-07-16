import { Root, Home } from '../pages';
import { PATH } from '../constants';

export const routes = [
  {
    element: <Root />,
    path: PATH.ROOT,
    children: [
      {
        element: <Home />,
        path: PATH.HOME,
      },
    ],
  },
];
