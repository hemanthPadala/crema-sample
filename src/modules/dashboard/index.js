import React from 'react';
import { authRole } from '../../shared/constants/AppConst';

export const dashBoardConfigs = [
  {
    auth: authRole.user,
    routes: [
      {
        path: '/dashboards/e-commerce',
        component: React.lazy(() => import('./ECommerce')),
      },
    ],
  },
  {
    auth: authRole.user,
    routes: [
      {
        path: '/dashboards/profile',
        component: React.lazy(() => import('./Profile')),
      },
    ],
  }
];
