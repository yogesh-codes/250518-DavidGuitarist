import {
    type RouteConfig,
    index,
    layout,
    route,
} from "@react-router/dev/routes";
//import { ErrorBoundary } from "./layouts/StandardLayout";

export default [
    layout("./layouts/StandardLayout.tsx", [index("./routes/Home.tsx")]),
] satisfies RouteConfig;
