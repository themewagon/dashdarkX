/* eslint-disable react-refresh/only-export-components */
import { Suspense, lazy } from 'react';
import { Outlet, createBrowserRouter } from 'react-router-dom';
import MainLayout from 'layouts/main-layout';
import Splash from 'components/loading/Splash';
import PageLoader from 'components/loading/PageLoader';
import paths, { parentPaths } from './paths';
import Products from 'pages/dashboard/Products';
import Task from 'pages/dashboard/Task';
import Profile from 'pages/account-settings/Profile';
import UpdateProfile from 'pages/account-settings/UpdateProfile';
import ChangePassword from 'pages/account-settings/ChangePassword';
import HelpCenter from 'pages/account-settings/HelpCenter';

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
            element: <Profile/>
          },
          {
            path: paths.updateProfile,
            element: <UpdateProfile/>
          },
          {
            path: paths.changePassword,
            element: <ChangePassword/>
          },
          {
            path: paths.helpCenter,
            element: <HelpCenter/>
          },
        ]
      }
    ],
  },
]);

export default router;
