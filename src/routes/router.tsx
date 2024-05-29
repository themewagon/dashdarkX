/* eslint-disable react-refresh/only-export-components */
import { Suspense, lazy } from 'react';
import { Outlet, createBrowserRouter } from 'react-router-dom';
import paths, { parentPaths } from './paths';
import MainLayout from 'layouts/main-layout';
import Splash from 'components/loading/Splash';
import PageLoader from 'components/loading/PageLoader';
import Products from 'pages/dashboard/products';
import Task from 'pages/dashboard/task';
import ComingSoon from 'pages/ComingSoon';

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
            element: <Reports />,
          },
          {
            path: paths.products,
            element: <Products />,
          },
          {
            path: paths.task,
            element: <Task />,
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
            element: <ComingSoon />,
          },
          {
            path: paths.companies,
            element: <ComingSoon />,
          },
          {
            path: paths.projects,
            element: <ComingSoon />,
          },
          {
            path: paths.tasks,
            element: <ComingSoon />,
          },
          {
            path: paths.board,
            element: <ComingSoon />,
          },
          {
            path: paths.table,
            element: <ComingSoon />,
          },
          {
            path: paths.crypto,
            element: <ComingSoon />,
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
            element: <ComingSoon />,
          },
          {
            path: paths.cards,
            element: <ComingSoon />,
          },
          {
            path: paths.details,
            element: <ComingSoon />,
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
            element: <ComingSoon />,
          },
          {
            path: paths.billing,
            element: <ComingSoon />,
          },
          {
            path: paths.subscriptions,
            element: <ComingSoon />,
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
            element: <ComingSoon />,
          },
          {
            path: paths.errors,
            element: <ComingSoon />,
          },
          {
            path: paths.history,
            element: <ComingSoon />,
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
            element: <ComingSoon />,
          },
          {
            path: paths.settingV2,
            element: <ComingSoon />,
          },
          {
            path: paths.settingV3,
            element: <ComingSoon />,
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
            element: <ComingSoon />,
          },
          {
            path: paths.page2,
            element: <ComingSoon />,
          },
          {
            path: paths.page3,
            element: <ComingSoon />,
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
            element: <ComingSoon />,
          },
          {
            path: paths.updateProfile,
            element: <ComingSoon />,
          },
          {
            path: paths.changePassword,
            element: <ComingSoon />,
          },
          {
            path: paths.helpCenter,
            element: <ComingSoon />,
          },
        ],
      },
    ],
  },
]);

export default router;
