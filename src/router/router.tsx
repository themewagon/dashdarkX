import { Suspense, lazy } from 'react';
import { Outlet, createBrowserRouter } from 'react-router';
import MainLayout from 'layouts/main-layout';

const App = lazy(() => import('App'));
const Dashboard = lazy(() => import('pages/Dashboard'));

const router = createBrowserRouter(
  [
    {
      element: (
        <Suspense fallback={<p>Loading...</p>}>
          <App />
        </Suspense>
      ),
      children: [
        {
          path: '/',
          element: (
            <MainLayout>
              <Suspense fallback={<p>Loading...</p>}>
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
      ],
    },
  ],
  {
    basename: '/dashdarkX',
  },
);

export default router;
