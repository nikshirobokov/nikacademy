import { FC, HTMLAttributes } from "react";
import { useLoaderData } from "@remix-run/react";
import { RootLoadData } from "../../../global";

export interface IHeaderProps extends HTMLAttributes<HTMLDivElement> {}

export const Header: FC<IHeaderProps> = () => {
	const rootLoadData = useLoaderData<RootLoadData>();

	return <header className="header">{rootLoadData.data.user.username}</header>;
};
