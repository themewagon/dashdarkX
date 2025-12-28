import { Suspense, lazy } from 'react';
import { Outlet, createBrowserRouter } from 'react-router';

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
            <Suspense fallback={<p>Loading...</p>}>
              <Outlet />
            </Suspense>
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
