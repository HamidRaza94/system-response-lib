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

declare class SystemResponse {
    static getInstance(): SystemResponse;
    static continueInfo(message: string): TResponse;
    static switchingProtocolsInfo(message: string): TResponse;
    static success(message: string, data: any): TSuccussResponse;
    static contentCreated(message: string, data: any): TSuccussResponse;
    static contentDeleted(message: string, data: any): TSuccussResponse;
    static multipleChoicesRedirect(message: string): TResponse;
    static movedPermanentlyRedirect(message: string): TResponse;
    static foundRedirect(message: string): TResponse;
    static seeOtherRedirect(message: string): TResponse;
    static notModifiedRedirect(message: string): TResponse;
    static useProxyRedirect(message: string): TResponse;
    static temporaryRedirect(message: string): TResponse;
    static badRequestError(message: string, errs?: any): TErrorResponse;
    static unauthorizedError(message: string, errs?: any): TErrorResponse;
    static paymentRequiredError(message: string, errs?: any): TErrorResponse;
    static forbiddenError(message: string, errs?: any): TErrorResponse;
    static notFoundError(message: string, errs?: any): TErrorResponse;
    static methodNotAllowedError(message: string, errs?: any): TErrorResponse;
    static notAcceptableError(message: string, errs?: any): TErrorResponse;
    static proxyAuthRequiredError(message: string, errs?: any): TErrorResponse;
    static requestTimeoutError(message: string, errs?: any): TErrorResponse;
    static conflictError(message: string, errs?: any): TErrorResponse;
    static goneError(message: string, errs?: any): TErrorResponse;
    static lengthRequiredError(message: string, errs?: any): TErrorResponse;
    static preconditionFailedError(message: string, errs?: any): TErrorResponse;
    static requestEntityTooLargeError(message: string, errs?: any): TErrorResponse;
    static requestUriTooLongError(message: string, errs?: any): TErrorResponse;
    static unsupportedMediaTypeError(message: string, errs?: any): TErrorResponse;
    static rangeNotSatisfiableError(message: string, errs?: any): TErrorResponse;
    static expectationFailedError(message: string, errs?: any): TErrorResponse;
    static unProcessableEntityError(message: string, errs?: any): TErrorResponse;
    static internalServerError(message: string, errs?: any): TErrorResponse;
    static notImplementedError(message: string, errs?: any): TErrorResponse;
    static badGatewayError(message: string, errs?: any): TErrorResponse;
    static serviceUnavailableError(message: string, errs?: any): TErrorResponse;
    static gatewayTimeoutError(message: string, errs?: any): TErrorResponse;
    static httpVersionNotSupportedError(message: string, errs?: any): TErrorResponse;
    getErrorResponse(message: string, code: number, errs?: any): TErrorResponse;
    getResponse(message: string, code: number): TResponse;
}

declare const STATUS_CODES: TStatusCodes;
declare const CODE_MESSAGES: TCodeMessages;

export { CODE_MESSAGES, STATUS_CODES, SystemResponse as default };
