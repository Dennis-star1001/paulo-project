import { path } from "./path";
import Dashboard from '@/pages/vendor/dashboard/Dashboard';
import { createBrowserRouter } from "react-router-dom";
import { DashboardLayout } from '@/components/layouts';


export const router = createBrowserRouter([
    {
        path: path.DASHBOARD,
        element: <Dashboard />,
    },
]
);