/* eslint-disable react-refresh/only-export-components */
import { Suspense, lazy } from 'react';
import { Outlet, createBrowserRouter } from 'react-router-dom';
import MainLayout from 'layouts/main-layout';
import Splash from 'components/loading/Splash';
import PageLoader from 'components/loading/PageLoader';
import paths from './paths';
import Products from 'pages/dashboard/Products';
import Task from 'pages/dashboard/Task';

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
    ],
  },
]);

export default router;
