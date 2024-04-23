/* eslint-disable react-refresh/only-export-components */
import { Suspense, lazy } from "react";
import { Outlet, createBrowserRouter } from "react-router-dom";
import MainLayout from "layouts/main-layout/index";
import Splash from "components/loading/Splash";
import PageLoader from "components/loading/PageLoader";

const App = lazy(() => import('App'));
const Dashboard = lazy(() => import('pages/Dashboard'));
const Billing = lazy(() => import('pages/Billing'));
const Tables = lazy(() => import('pages/Tables'));
const Rtl = lazy(() => import('pages/Rtl'));

const router = createBrowserRouter([
    {
        element: (
            <Suspense fallback={<Splash/>}>
                <App/>
            </Suspense>
        ),
        children: [
            {
                path: "/",
                element: (
                    <MainLayout>
                        <Suspense fallback={<PageLoader/>}>
                            <Outlet/>
                        </Suspense>
                    </MainLayout>
                ),
                children: [
                    {
                        index: true,
                        element: <Dashboard/>
                    },
                    {
                        path: '/tables',
                        element: <Tables/>
                    },
                    {
                        path: '/billing',
                        element: <Billing/>
                    },
                    {
                        path: '/rtl',
                        element: <Rtl/>
                    }
                ]
            }
        ]
    }
]);

export default router;