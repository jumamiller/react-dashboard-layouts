import {Sidebar} from "../../shared/layouts/admin/sidebar/SubMenu";

const routes=[
    {
        name: "Main Dashboard",
        layout: "/admin",
        path: "",
        icon: "",
        element: Sidebar,
        children: [
            {
                path: "dashboard",
                element: <div>Test</div>
            }

        ]
    }
];
