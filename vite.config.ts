import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
            "/php": {
                target: "http://localhost:80",
                changeOrigin: true,
            },
            "/cms": {
                target: "https://cms.laurencesummers.com",
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/cms/, ""),
            },
        },
    },
});
