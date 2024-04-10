import { createBrowserRouter  } from "react-router-dom";
import Dashboard from "pages/Dashboard";
import App from "App";
import Tables from "pages/Tables";
import MainLayout from "layouts/MainLayout";

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
            }
        ]
    }
]);

export default router;