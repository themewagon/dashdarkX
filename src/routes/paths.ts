export const rootPaths = {
  root: '/',
  pagesRoot: 'pages',
  authRoot: 'authentication',
  errorRoot: 'error',
};

export const parentPaths = {
  dashboard: `/${rootPaths.pagesRoot}/dashboard`,
  features: `/${rootPaths.pagesRoot}/features`,
  users: `/${rootPaths.pagesRoot}/users`,
  pricing: `/${rootPaths.pagesRoot}/pricing`,
  integrations: `/${rootPaths.pagesRoot}/integrations`,
  settings: `/${rootPaths.pagesRoot}/settings`,
  templatePages: `/${rootPaths.pagesRoot}/template-pages`,
  accountSettings: `/${rootPaths.pagesRoot}/account-settings`,
};

export default {
  reports: `${parentPaths.dashboard}/reports`,
  products: `${parentPaths.dashboard}/products`,
  task: `${parentPaths.dashboard}/task`,

  contacts: `${parentPaths.features}/contacts`,
  companies: `${parentPaths.features}/companies`,
  projects: `${parentPaths.features}/projects`,
  tasks: `${parentPaths.features}/tasks`,
  board: `${parentPaths.features}/board`,
  table: `${parentPaths.features}/table`,
  crypto: `${parentPaths.features}/crypto`,

  active: `${parentPaths.users}/active`,
  cards: `${parentPaths.users}/cards`,
  details: `${parentPaths.users}/details`,

  accounts: `${parentPaths.pricing}/accounts`,
  billing: `${parentPaths.pricing}/billing`,
  subscriptions: `${parentPaths.pricing}/subscriptions`,

  group: `${parentPaths.integrations}/group`,
  errors: `${parentPaths.integrations}/errors`,
  history: `${parentPaths.integrations}/history`,

  settingV1: `${parentPaths.settings}/setting-v1`,
  settingV2: `${parentPaths.settings}/setting-v2`,
  settingV3: `${parentPaths.settings}/setting-v3`,

  page1: `${parentPaths.templatePages}/page-1`,
  page2: `${parentPaths.templatePages}/page-2`,
  page3: `${parentPaths.templatePages}/page-3`,

  profile: `${parentPaths.accountSettings}/profile`,
  updateProfile: `${parentPaths.templatePages}/update-profile`,
  changePassword: `${parentPaths.templatePages}/change-password`,
  helpCenter: `${parentPaths.templatePages}/help-center`,

  login: `/${rootPaths.authRoot}/login`,
  signup: `/${rootPaths.authRoot}/sign-up`,
  forgotPassword: `/${rootPaths.authRoot}/forgot-password`,
  comingSoon: `/coming-soon`,
  404: `/${rootPaths.errorRoot}/404`,
};
