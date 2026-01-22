import { Suspense, lazy } from 'react';
import { Outlet, createBrowserRouter } from 'react-router';
import MainLayout from 'layouts/main-layout';
import Splash from 'components/loader/Splash';
import PageLoader from 'components/loader/PageLoader';
import paths, { rootPaths } from './paths';
import AuthLayout from 'layouts/auth-layout/AuthLayout';
import Signin from 'pages/authentication/Signin';
import Signup from 'pages/authentication/Signup';
import Error404 from 'pages/Error404';

const App = lazy(() => import('App'));
const Dashboard = lazy(() => import('pages/Dashboard'));

const router = createBrowserRouter(
  [
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
              element: <Dashboard />,
            },
          ],
        },
        {
          path: rootPaths.authRoot,
          element: (
            <AuthLayout>
              <Outlet />
            </AuthLayout>
          ),
          children: [
            {
              path: paths.signin,
              element: <Signin />,
            },
            {
              path: paths.signup,
              element: <Signup />,
            },
          ],
        },
        {
          path: '*',
          element: <Error404 />,
        },
      ],
    },
  ],
  {
    basename: '/dashdarkX',
  },
);

export default router;
