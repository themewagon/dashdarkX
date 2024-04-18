import { createBrowserRouter  } from "react-router-dom";
import Dashboard from "pages/Dashboard";
import App from "App";
import MainLayout from "layouts/main-layout/index";
import Tables from "pages/Tables";
import Billing from "pages/Billing";
import Rtl from "pages/Rtl";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: (
                    <MainLayout>
                        <Dashboard/>
                    </MainLayout>
                )
            },
            {
                path: "/tables",
                element: (
                    <MainLayout>
                        <Tables/>
                    </MainLayout>
                )
            },
            {
                path: "/billing",
                element: (
                    <MainLayout>
                        <Billing/>
                    </MainLayout>
                )
            },
            {
                path: "/rtl",
                element: (
                    <MainLayout>
                        <Rtl/>
                    </MainLayout>
                )
            }
        ]
    }
]);

export default router;