import paths from './paths';

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
        path: '#',
        pathName: '#',
      },
      {
        name: 'Reports',
        path: paths.reports,
        pathName: 'reports',
        active: true
      },
      {
        name: 'Products',
        path: paths.products,
        pathName: 'products',
      },
      {
        name: 'Task',
        path: paths.task,
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
        path: '#',
        pathName: '#',
      },
      {
        name: 'Contacts',
        path: paths.contacts,
        pathName: 'contacts',
      },
      {
        name: 'Companies',
        path: paths.companies,
        pathName: 'companies',
      },
      {
        name: 'Projects',
        path: paths.projects,
        pathName: 'projects',
      },
      {
        name: 'Tasks',
        path: paths.tasks,
        pathName: 'tasks',
      },
      {
        name: 'Board',
        path: paths.board,
        pathName: 'board',
      },
      {
        name: 'Table',
        path: paths.table,
        pathName: 'table',
      },
      {
        name: 'Crypto',
        path: paths.crypto,
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
        path: '#',
        pathName: '#',
      },
      {
        name: 'Active',
        path: paths.active,
        pathName: 'active',
      },
      {
        name: 'Cards',
        path: paths.cards,
        pathName: 'cards',
      },
      {
        name: 'Details',
        path: paths.details,
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
        path: '#',
        pathName: '#',
      },
      {
        name: 'Accounts',
        path: paths.accounts,
        pathName: 'accounts',
      },
      {
        name: 'Billing',
        path: paths.billing,
        pathName: 'billing',
      },
      {
        name: 'Subscriptions',
        path: paths.subscriptions,
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
        path: '#',
        pathName: '#',
      },
      {
        name: 'Group',
        path: paths.group,
        pathName: 'group',
      },
      {
        name: 'Errors',
        path: paths.errors,
        pathName: 'errors',
      },
      {
        name: 'History',
        path: paths.history,
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
        path: '#',
        pathName: '#',
      },
      {
        name: 'Setting V1',
        path: paths.settingV1,
        pathName: 'setting-v1',
      },
      {
        name: 'Setting V2',
        path: paths.settingV2,
        pathName: 'setting-v2',
      },
      {
        name: 'Setting V3',
        path: paths.settingV3,
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
        path: '#',
        pathName: '#',
      },
      {
        name: 'Page 01',
        path: paths.page1,
        pathName: 'page-1',
      },
      {
        name: 'Page 02',
        path: paths.page2,
        pathName: 'page-2',
      },
      {
        name: 'Page 03',
        path: paths.page3,
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
        path: '#',
        pathName: '#',
      },
      {
        name: 'My Profile',
        path: paths.profile,
        pathName: 'profile',
      },
      {
        name: 'Update Profile',
        path: paths.updateProfile,
        pathName: 'update-profile',
      },
      {
        name: 'Change Password',
        path: paths.changePassword,
        pathName: 'change-password',
      },
      {
        name: 'Help Center',
        path: paths.helpCenter,
        pathName: 'help-center',
      },
    ],
  },
];

export default sitemap;
