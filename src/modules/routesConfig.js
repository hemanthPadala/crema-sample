import {authRole} from '../shared/constants/AppConst';

const routesConfig = [
  {
    id: 'app',
    title: 'Application',
    messageId: 'sidebar.application',
    type: 'group',
    children: [
      {
        id: 'dashboards',
        title: 'Dashboards',
        messageId: 'sidebar.app.dashboard',
        type: 'collapse',
        icon: 'dashboard',
        children: [
          {
            id: 'e-commerce',
            title: 'E-Commerce',
            messageId: 'sidebar.app.dashboard.eCommerce',
            type: 'item',
            url: '/dashboards/e-commerce',
          },
          {
            id: 'profile',
            title: 'Profile',
            messageId: 'Profile',
            type: 'item',
            url: '/dashboards/profile',
          },         
        ],
      },
    ],
  }
];
export default routesConfig;
