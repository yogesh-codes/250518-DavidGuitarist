import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";

export default defineConfig(({ command }) => ({
    plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
    resolve: {
        alias: {
            "~": path.resolve(__dirname, "./app"),
        },
    },
    base: "/", //command === "serve" ? "/" : "/250518-DavidGuitarist/",
}));
