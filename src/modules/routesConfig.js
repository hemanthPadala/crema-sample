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
            id: 'profile',
            title: 'Profile',
            messageId: 'sidebar.app.dashboard.profile',
            type: 'item',
            url: '/dashboards/profile',
          },        
        ],
      },
    ],
  }
];
export default routesConfig;
