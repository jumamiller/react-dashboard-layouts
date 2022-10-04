import {Sidebar} from "../../shared/layouts/admin/sidebar/SubMenu";

export const dashboardRoutes=[
    {
        name: "Main Dashboard",
        layout: "/admin",
        path: "/default",
        icon: "",
        element: Sidebar,
        children: [
            {
                path: "dashboard",
                element: <div>Stats</div>,
            }
        ]
    }
];
