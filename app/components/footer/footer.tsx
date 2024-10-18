import { FC } from "react";
import { useLoaderData } from "@remix-run/react";
import { RootLoadData } from "../../../global";

export interface IFooterProps {}

export const Footer: FC<IFooterProps> = () => {
  const rootLoadData = useLoaderData<RootLoadData>();

  return (
    <footer className="footer">{rootLoadData.data.constants.copyright}</footer>
  );
};
