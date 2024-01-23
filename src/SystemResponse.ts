import { STATUS_CODES, CODE_MESSAGES } from './constants';
import { TResponse, TSuccussResponse, TErrorResponse } from './types';

class SystemResponse {
	static getInstance(): SystemResponse {
		return new SystemResponse();
	}

	static continueInfo(message: string): TResponse {
		return SystemResponse.getInstance().getResponse(message, STATUS_CODES.CONTINUE);
	}

	static switchingProtocolsInfo(message: string): TResponse {
		return SystemResponse.getInstance().getResponse(message, STATUS_CODES.SWITCHING_PROTOCOLS);
	}

	static success(message: string, data: any): TSuccussResponse {
		return {
			message: message || CODE_MESSAGES[STATUS_CODES.SUCCESS],
			status: STATUS_CODES.SUCCESS,
			data: data || {},
		};
	}

	static contentCreated(message: string, data: any): TSuccussResponse {
		return {
			message: message || CODE_MESSAGES[STATUS_CODES.CONTENT_CREATED],
			status: STATUS_CODES.CONTENT_CREATED,
			data: data || {},
		};
	}

	static contentDeleted(message: string, data: any): TSuccussResponse {
		return {
			message: message || CODE_MESSAGES[STATUS_CODES.CONTENT_DELETED],
			status: STATUS_CODES.CONTENT_DELETED,
			data: data || {},
		};
	}

	static multipleChoicesRedirect(message: string): TResponse {
		return SystemResponse.getInstance().getResponse(message, STATUS_CODES.MULTIPLE_CHOICES);
	}

	static movedPermanentlyRedirect(message: string): TResponse {
		return SystemResponse.getInstance().getResponse(message, STATUS_CODES.MOVED_PERMANENTLY);
	}

	static foundRedirect(message: string): TResponse {
		return SystemResponse.getInstance().getResponse(message, STATUS_CODES.FOUND);
	}

	static seeOtherRedirect(message: string): TResponse {
		return SystemResponse.getInstance().getResponse(message, STATUS_CODES.SEE_OTHER);
	}

	static notModifiedRedirect(message: string): TResponse {
		return SystemResponse.getInstance().getResponse(message, STATUS_CODES.NOT_MODIFIED);
	}

	static useProxyRedirect(message: string): TResponse {
		return SystemResponse.getInstance().getResponse(message, STATUS_CODES.USE_PROXY);
	}

	static temporaryRedirect(message: string): TResponse {
		return SystemResponse.getInstance().getResponse(message, STATUS_CODES.TEMPORARY_REDIRECT);
	}

	static badRequestError(message: string, errs?: any): TErrorResponse {
		return SystemResponse.getInstance().getErrorResponse(message, STATUS_CODES.BAD_REQUEST, errs);
	}

	static unauthorizedError(message: string, errs?: any): TErrorResponse {
		return SystemResponse.getInstance().getErrorResponse(message, STATUS_CODES.UNAUTHORIZED, errs);
	}

	static paymentRequiredError(message: string, errs?: any): TErrorResponse {
		return SystemResponse.getInstance().getErrorResponse(message, STATUS_CODES.PAYMENT_REQUIRED, errs);
	}

	static forbiddenError(message: string, errs?: any): TErrorResponse {
		return SystemResponse.getInstance().getErrorResponse(message, STATUS_CODES.FORBIDDEN, errs);
	}

	static notFoundError(message: string, errs?: any): TErrorResponse {
		return SystemResponse.getInstance().getErrorResponse(message, STATUS_CODES.NOT_FOUND, errs);
	}

	static methodNotAllowedError(message: string, errs?: any): TErrorResponse {
		return SystemResponse.getInstance().getErrorResponse(message, STATUS_CODES.METHOD_NOT_ALLOWED, errs);
	}

	static notAcceptableError(message: string, errs?: any): TErrorResponse {
		return SystemResponse.getInstance().getErrorResponse(message, STATUS_CODES.NOT_ACCEPTABLE, errs);
	}

	static proxyAuthRequiredError(message: string, errs?: any): TErrorResponse {
		return SystemResponse.getInstance().getErrorResponse(message, STATUS_CODES.PROXY_AUTHENTICATION_REQUIRED, errs);
	}

	static requestTimeoutError(message: string, errs?: any): TErrorResponse {
		return SystemResponse.getInstance().getErrorResponse(message, STATUS_CODES.REQUEST_TIMEOUT, errs);
	}

	static conflictError(message: string, errs?: any): TErrorResponse {
		return SystemResponse.getInstance().getErrorResponse(message, STATUS_CODES.CONFLICT, errs);
	}

	static goneError(message: string, errs?: any): TErrorResponse {
		return SystemResponse.getInstance().getErrorResponse(message, STATUS_CODES.GONE, errs);
	}

	static lengthRequiredError(message: string, errs?: any): TErrorResponse {
		return SystemResponse.getInstance().getErrorResponse(message, STATUS_CODES.LENGTH_REQUIRED, errs);
	}

	static preconditionFailedError(message: string, errs?: any): TErrorResponse {
		return SystemResponse.getInstance().getErrorResponse(message, STATUS_CODES.PRECONDITION_FAILED, errs);
	}

	static requestEntityTooLargeError(message: string, errs?: any): TErrorResponse {
		return SystemResponse.getInstance().getErrorResponse(message, STATUS_CODES.REQUEST_ENTITY_TOO_LARGE, errs);
	}

	static requestUriTooLongError(message: string, errs?: any): TErrorResponse {
		return SystemResponse.getInstance().getErrorResponse(message, STATUS_CODES.REQUEST_URI_TOO_LONG, errs);
	}

	static unsupportedMediaTypeError(message: string, errs?: any): TErrorResponse {
		return SystemResponse.getInstance().getErrorResponse(message, STATUS_CODES.UNSUPPORTED_MEDIA_TYPE, errs);
	}

	static rangeNotSatisfiableError(message: string, errs?: any): TErrorResponse {
		return SystemResponse.getInstance().getErrorResponse(message, STATUS_CODES.REQUESTED_RANGE_NOT_SATISFIABLE, errs);
	}

	static expectationFailedError(message: string, errs?: any): TErrorResponse {
		return SystemResponse.getInstance().getErrorResponse(message, STATUS_CODES.EXPECTATION_FAILED, errs);
	}

	static unProcessableEntityError(message: string, errs?: any): TErrorResponse {
		return SystemResponse.getInstance().getErrorResponse(message, STATUS_CODES.UN_PROCESSABLE_ENTITY, errs);
	}

	static internalServerError(message: string, errs?: any): TErrorResponse {
		return SystemResponse.getInstance().getErrorResponse(message, STATUS_CODES.INTERNAL_SERVER_ERROR, errs);
	}

	static notImplementedError(message: string, errs?: any): TErrorResponse {
		return SystemResponse.getInstance().getErrorResponse(message, STATUS_CODES.NOT_IMPLEMENTED, errs);
	}

	static badGatewayError(message: string, errs?: any): TErrorResponse {
		return SystemResponse.getInstance().getErrorResponse(message, STATUS_CODES.BAD_GATEWAY, errs);
	}

	static serviceUnavailableError(message: string, errs?: any): TErrorResponse {
		return SystemResponse.getInstance().getErrorResponse(message, STATUS_CODES.SERVICE_UNAVAILABLE, errs);
	}

	static gatewayTimeoutError(message: string, errs?: any): TErrorResponse {
		return SystemResponse.getInstance().getErrorResponse(message, STATUS_CODES.GATEWAY_TIME_OUT, errs);
	}

	static httpVersionNotSupportedError(message: string, errs?: any): TErrorResponse {
		return SystemResponse.getInstance().getErrorResponse(message, STATUS_CODES.HTTP_VERSION_NOT_SUPPORTED, errs);
	}

	getErrorResponse(message: string, code: number, errs?: any): TErrorResponse {
		return {
			message: message || CODE_MESSAGES[code],
			status: code,
			errs: errs || CODE_MESSAGES[code],
		};
	}

	getResponse(message: string, code: number): TResponse {
		return {
			message: message || CODE_MESSAGES[code],
			status: code,
		};
	}
}

export default SystemResponse;
