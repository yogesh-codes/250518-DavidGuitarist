import {
    type RouteConfig,
    index,
    layout,
    route,
} from "@react-router/dev/routes";
//import { ErrorBoundary } from "./layouts/StandardLayout";

export default [
    layout("layouts/MasterLayout/MasterLayout.tsx", [
        layout("layouts/StandardLayout.tsx", [
            index("routes/home.tsx"),
            route("contact", "routes/contact.tsx"),
            route("testimonials", "routes/testimonials.tsx"),
            route("project-info", "routes/project-info.tsx"),
            route("register-success", "routes/register-success.tsx"),
        ]),
    ]),
] satisfies RouteConfig;
