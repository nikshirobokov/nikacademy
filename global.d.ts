import type { User } from "~/db";

export interface Constants {
	copyright: string;
}

export interface LoadDataJson<T> {
	data: T;
	error?: string;
}

export type RootLoadData = LoadDataJson<{
	user: User;
	constants: Constants;
}>;
