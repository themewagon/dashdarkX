/* eslint-disable react-refresh/only-export-components */
import { Suspense, lazy } from 'react';
import { Outlet, createBrowserRouter } from 'react-router-dom';
import paths, { parentPaths } from './paths';
import MainLayout from 'layouts/main-layout';
import Splash from 'components/loading/Splash';
import PageLoader from 'components/loading/PageLoader';

const App = lazy(() => import('App'));
const Reports = lazy(() => import('pages/dashboard/reports'));

const router = createBrowserRouter([
  {
    element: (
      <Suspense fallback={<Splash />}>
        <App />
      </Suspense>
    ),
    children: [
      {
        path: '/',
        element: (
          <MainLayout>
            <Suspense fallback={<PageLoader />}>
              <Outlet />
            </Suspense>
          </MainLayout>
        ),
        children: [
          {
            index: true,
            element: <Reports />,
          },
          {
            path: paths.reports,
            element: null,
          },
          {
            path: paths.products,
            element: null,
          },
          {
            path: paths.task,
            element: null,
          },
        ],
      },
      {
        path: parentPaths.features,
        element: (
          <MainLayout>
            <Suspense fallback={<PageLoader />}>
              <Outlet />
            </Suspense>
          </MainLayout>
        ),
        children: [
          {
            path: paths.contacts,
            element: null,
          },
          {
            path: paths.companies,
            element: null,
          },
          {
            path: paths.projects,
            element: null,
          },
          {
            path: paths.tasks,
            element: null,
          },
          {
            path: paths.board,
            element: null,
          },
          {
            path: paths.table,
            element: null,
          },
          {
            path: paths.crypto,
            element: null,
          },
        ],
      },
      {
        path: parentPaths.users,
        element: (
          <MainLayout>
            <Suspense fallback={<PageLoader />}>
              <Outlet />
            </Suspense>
          </MainLayout>
        ),
        children: [
          {
            path: paths.active,
            element: null,
          },
          {
            path: paths.cards,
            element: null,
          },
          {
            path: paths.details,
            element: null,
          },
        ],
      },
      {
        path: parentPaths.pricing,
        element: (
          <MainLayout>
            <Suspense fallback={<PageLoader />}>
              <Outlet />
            </Suspense>
          </MainLayout>
        ),
        children: [
          {
            path: paths.accounts,
            element: null,
          },
          {
            path: paths.billing,
            element: null,
          },
          {
            path: paths.subscriptions,
            element: null,
          },
        ],
      },
      {
        path: parentPaths.integrations,
        element: (
          <MainLayout>
            <Suspense fallback={<PageLoader />}>
              <Outlet />
            </Suspense>
          </MainLayout>
        ),
        children: [
          {
            path: paths.group,
            element: null,
          },
          {
            path: paths.errors,
            element: null,
          },
          {
            path: paths.history,
            element: null,
          },
        ],
      },
      {
        path: parentPaths.settings,
        element: (
          <MainLayout>
            <Suspense fallback={<PageLoader />}>
              <Outlet />
            </Suspense>
          </MainLayout>
        ),
        children: [
          {
            path: paths.settingV1,
            element: null,
          },
          {
            path: paths.settingV2,
            element: null,
          },
          {
            path: paths.settingV3,
            element: null,
          },
        ],
      },
      {
        path: parentPaths.templatePages,
        element: (
          <MainLayout>
            <Suspense fallback={<PageLoader />}>
              <Outlet />
            </Suspense>
          </MainLayout>
        ),
        children: [
          {
            path: paths.page1,
            element: null,
          },
          {
            path: paths.page2,
            element: null,
          },
          {
            path: paths.page3,
            element: null,
          },
        ],
      },
      {
        path: parentPaths.accountSettings,
        element: (
          <MainLayout>
            <Suspense fallback={<PageLoader />}>
              <Outlet />
            </Suspense>
          </MainLayout>
        ),
        children: [
          {
            path: paths.profile,
            element: null,
          },
          {
            path: paths.updateProfile,
            element: null,
          },
          {
            path: paths.changePassword,
            element: null,
          },
          {
            path: paths.helpCenter,
            element: null,
          },
        ],
      },
    ],
  },
]);

export default router;
