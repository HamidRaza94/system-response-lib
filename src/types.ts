export type TErrorResponse = {
	message: string;
	status: number;
	errs: any;
}

export type TResponse = {
	message: string;
	status: number;
}

export type TSuccussResponse = {
	message: string;
	status: number;
	data: any;
}

export type TStatusCodes = {
	[key: string]: number;
};

export type TCodeMessages = {
	[key: number]: string;
};
