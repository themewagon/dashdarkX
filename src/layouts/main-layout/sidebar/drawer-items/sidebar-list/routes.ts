export const topListRoutes = [
  {
    path: '/dashboard',
    title: 'Dashboard',
    icon: 'mingcute:home-1-fill',
    children: [
      {
        path: '#',
        title: 'All Pages',
      },
      {
        path: '/reports',
        title: 'Reports',
      },
      {
        path: '/products',
        title: 'Products',
      },
      {
        path: '/task',
        title: 'Task',
      },
    ],
  },
  {
    path: '/features',
    title: 'Features',
    icon: 'mingcute:star-fill',
    children: [
      {
        path: '#',
        title: 'All Pages',
      },
      {
        path: '/contacts',
        title: 'Contacts',
      },
      {
        path: '/companies',
        title: 'Companies',
      },
      {
        path: '/projects',
        title: 'Projects',
      },
      {
        path: '/tasks',
        title: 'Tasks',
      },
      {
        path: '/board',
        title: 'Board',
      },
      {
        path: '/table',
        title: 'Table',
      },
      {
        path: '/crypto',
        title: 'Crypto',
      },
    ],
  },
  {
    path: '/users',
    title: 'Users',
    icon: 'mingcute:user-2-fill',
    children: [
      {
        path: '#',
        title: 'All Pages',
      },
      {
        path: '/active',
        title: 'Active',
      },
      {
        path: '/cards',
        title: 'Cards',
      },
      {
        path: '/details',
        title: 'Details',
      },
    ],
  },
  {
    path: '/pricing',
    title: 'Pricing',
    icon: 'mingcute:currency-dollar-2-line',
    children: [
      {
        path: '#',
        title: 'All Pages',
      },
      {
        path: '/accounts',
        title: 'Accounts',
      },
      {
        path: '/billing',
        title: 'Billing',
      },
      {
        path: '/subscriptions',
        title: 'Subscriptions',
      },
    ],
  },
  {
    path: '/integrations',
    title: 'Integrations',
    icon: 'mingcute:plugin-2-fill',
    children: [
      {
        path: '#',
        title: 'All Pages',
      },
      {
        path: '/group',
        title: 'Group',
      },
      {
        path: '/errors',
        title: 'Errors',
      },
      {
        path: '/history',
        title: 'History',
      },
    ],
  },
];

export const bottomListRoutes = [
  {
    path: '/settings',
    title: 'Settings',
    icon: 'solar:settings-bold',
    children: [
      {
        path: '#',
        title: 'All Pages',
      },
      {
        path: '/setting-v1',
        title: 'Setting V1',
      },
      {
        path: '/setting-v2',
        title: 'Setting V2',
      },
      {
        path: '/setting-v3',
        title: 'Setting V3',
      },
    ],
  },
  {
    path: '/template-pages',
    title: 'Template pages',
    icon: 'mingcute:document-2-fill',
    children: [
      {
        path: '#',
        title: 'All Pages',
      },
      {
        path: '/page1',
        title: 'Page 01',
      },
      {
        path: '/page2',
        title: 'Page 02',
      },
      {
        path: '/page3',
        title: 'Page 03',
      },
    ],
  },
];

export const profileRoute = {
  path: '/account-settings',
  profileName: 'John Carter',
  children: [
    {
      path: '#',
      title: 'All Pages',
    },
    {
      path: '/profile',
      title: 'My Profile',
    },
    {
      path: '/update-profile',
      title: 'Update Profile',
    },
    {
      path: '/change-password',
      title: 'Change Password',
    },
    {
      path: '/help-center',
      title: 'Help Center',
    },
  ],
};
