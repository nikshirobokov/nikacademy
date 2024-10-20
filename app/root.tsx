import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";
import { json, LinksFunction, LoaderFunction } from "@remix-run/node";

import rootStyles from "./root.scss?url";
import { RootLoadData } from "../global";
import { UserExample } from "~/db/resources";
import { Header } from "~/components";
import { Footer } from "~/components/footer";
import { getCopyright } from "~/utils";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: rootStyles }];

export const loader: LoaderFunction = () => {
	return json<RootLoadData>({
		data: {
			user: UserExample,
			constants: { copyright: getCopyright() },
		},
		error: "Не авторизован",
	});
};

export function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="ru">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body>
				{children}
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
}

export default function App() {
	return (
		<div>
			<Header />
			<main>
				<Outlet />
			</main>
			<Footer />
		</div>
	);
}
