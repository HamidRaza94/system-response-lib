type TResponse = {
	message: string;
	status: number;
};

type TSuccussResponse = {
	message: string;
	status: number;
	data: any;
};

type TStatusCodes = {
	[key: string]: number;
};

type TCodeMessages = {
	[key: number]: string;
};

type TErrorResponse = {
	message: string;
	status: number;
	errs: any;
};

export { TResponse, TSuccussResponse, TStatusCodes, TCodeMessages, TErrorResponse };
