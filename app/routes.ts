import {
    type RouteConfig,
    index,
    layout,
    route,
} from "@react-router/dev/routes";
//import { ErrorBoundary } from "./layouts/StandardLayout";

export default [
    layout("./layouts/StandardLayout.tsx", [index("~/routes/home.tsx")]),
    // route("/about", "./pages/About/About.tsx"),
] satisfies RouteConfig;
