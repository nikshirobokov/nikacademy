import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig, loadEnv, ServerOptions } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import * as process from "node:process";

declare module "@remix-run/node" {
	interface Future {
		v3_singleFetch: true;
	}
}

export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), "");
	const server: ServerOptions = {};

	if (env.VITE_PORT) {
		server.port = Number(env.VITE_PORT);
	}

	return {
		css: {
			preprocessorOptions: {
				scss: {
					quietDeps: true,
				},
			},
		},
		plugins: [
			remix({
				future: {
					v3_fetcherPersist: true,
					v3_relativeSplatPath: true,
					v3_throwAbortReason: true,
					v3_singleFetch: true,
					v3_lazyRouteDiscovery: true,
				},
			}),
			tsconfigPaths(),
		],
		server,
	};
});
