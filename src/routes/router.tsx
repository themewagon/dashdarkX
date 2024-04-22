import { Outlet, createBrowserRouter  } from "react-router-dom";
import MainLayout from "layouts/main-layout/index";
import Dashboard from "pages/Dashboard";
import Billing from "pages/Billing";
import Tables from "pages/Tables";
import Rtl from "pages/Rtl";
import App from "App";

const router = createBrowserRouter([
    {
        element: <App/>,
        children: [
            {
                path: "/",
                element: (
                    <MainLayout>
                        <Outlet/>
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