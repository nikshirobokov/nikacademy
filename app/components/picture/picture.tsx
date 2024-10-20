import { FC, ImgHTMLAttributes } from "react";

export interface IPictureProps extends ImgHTMLAttributes<HTMLImageElement> {}

export const Picture: FC<IPictureProps> = ({ className, alt, ...restProps }) => {
	return <img className={"picture " + className} {...restProps} alt={alt || ""} />;
};
