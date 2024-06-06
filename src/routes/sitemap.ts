// import paths from './paths';

export interface SubMenuItem {
  name: string;
  pathName: string;
  path?: string;
  active?: boolean;
  items?: SubMenuItem[];
}

export interface MenuItem {
  id: string;
  subheader: string;
  icon?: string;
  avatar?: string;
  active?: boolean;
  items: SubMenuItem[];
}

const sitemap: MenuItem[] = [
  {
    id: 'dashboard',
    subheader: 'Dashboard',
    icon: 'mingcute:home-1-fill',
    active: true,
    items: [
      {
        name: 'All Pages',
        path: '#!',
        pathName: '#!',
      },
      {
        name: 'Reports',
        path: '#!',
        pathName: 'reports',
        active: true,
      },
      {
        name: 'Products',
        path: '#!',
        pathName: 'products',
      },
      {
        name: 'Task',
        path: '#!',
        pathName: 'task',
      },
    ],
  },
  {
    id: 'features',
    subheader: 'Features',
    icon: 'mingcute:star-fill',
    items: [
      {
        name: 'All Pages',
        path: '#!',
        pathName: '#!',
      },
      {
        name: 'Contacts',
        path: '#!',
        pathName: 'contacts',
      },
      {
        name: 'Companies',
        path: '#!',
        pathName: 'companies',
      },
      {
        name: 'Projects',
        path: '#!',
        pathName: 'projects',
      },
      {
        name: 'Tasks',
        path: '#!',
        pathName: 'tasks',
      },
      {
        name: 'Board',
        path: '#!',
        pathName: 'board',
      },
      {
        name: 'Table',
        path: '#!',
        pathName: 'table',
      },
      {
        name: 'Crypto',
        path: '#!',
        pathName: 'crypto',
      },
    ],
  },
  {
    id: 'users',
    subheader: 'Users',
    icon: 'mingcute:user-2-fill',
    items: [
      {
        name: 'All Pages',
        path: '#!',
        pathName: '#!',
      },
      {
        name: 'Active',
        path: '#!',
        pathName: 'active',
      },
      {
        name: 'Cards',
        path: '#!',
        pathName: 'cards',
      },
      {
        name: 'Details',
        path: '#!',
        pathName: 'details',
      },
    ],
  },
  {
    id: 'pricing',
    subheader: 'Pricing',
    icon: 'mingcute:currency-dollar-2-line',
    items: [
      {
        name: 'All Pages',
        path: '#!',
        pathName: '#!',
      },
      {
        name: 'Accounts',
        path: '#!',
        pathName: 'accounts',
      },
      {
        name: 'Billing',
        path: '#!',
        pathName: 'billing',
      },
      {
        name: 'Subscriptions',
        path: '#!',
        pathName: 'subscriptions',
      },
    ],
  },
  {
    id: 'integrations',
    subheader: 'Integrations',
    icon: 'mingcute:plugin-2-fill',
    items: [
      {
        name: 'All Pages',
        path: '#!',
        pathName: '#!',
      },
      {
        name: 'Group',
        path: '#!',
        pathName: 'group',
      },
      {
        name: 'Errors',
        path: '#!',
        pathName: 'errors',
      },
      {
        name: 'History',
        path: '#!',
        pathName: 'history',
      },
    ],
  },
  {
    id: 'settings',
    subheader: 'Settings',
    icon: 'solar:settings-bold',
    items: [
      {
        name: 'All Pages',
        path: '#!',
        pathName: '#!',
      },
      {
        name: 'Setting V1',
        path: '#!',
        pathName: 'setting-v1',
      },
      {
        name: 'Setting V2',
        path: '#!',
        pathName: 'setting-v2',
      },
      {
        name: 'Setting V3',
        path: '#!',
        pathName: 'setting-v3',
      },
    ],
  },
  {
    id: 'template-pages',
    subheader: 'Template pages',
    icon: 'mingcute:document-2-fill',
    items: [
      {
        name: 'All Pages',
        path: '#!',
        pathName: '#!',
      },
      {
        name: 'Page 01',
        path: '#!',
        pathName: 'page-1',
      },
      {
        name: 'Page 02',
        path: '#!',
        pathName: 'page-2',
      },
      {
        name: 'Page 03',
        path: '#!',
        pathName: 'page-3',
      },
    ],
  },
  {
    id: 'account-settings',
    subheader: 'John Carter',
    items: [
      {
        name: 'All Pages',
        path: '#!',
        pathName: '#!',
      },
      {
        name: 'My Profile',
        path: '#!',
        pathName: 'profile',
      },
      {
        name: 'Update Profile',
        path: '#!',
        pathName: 'update-profile',
      },
      {
        name: 'Change Password',
        path: '#!',
        pathName: 'change-password',
      },
      {
        name: 'Help Center',
        path: '#!',
        pathName: 'help-center',
      },
    ],
  },
];

export default sitemap;
