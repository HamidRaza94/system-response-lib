import SystemResponse from '../SystemResponse';

describe(__filename, () => {
	describe('test 1xx HTTP Status Codes', () => {
		describe('with default message', () => {
			it('should return with 100 status code', () => {
				const response = SystemResponse.continueInfo('');

				expect(response).toEqual({ message: 'Continue', status: 100 });
			});

			it('should return with 101 status code', () => {
				const response = SystemResponse.switchingProtocolsInfo('');

				expect(response).toEqual({ message: 'Switching Protocols', status: 101 });
			});
		});

		describe('with custom message', () => {
			const message = 'custom message';

			it('should return with 100 status code', () => {
				const response = SystemResponse.continueInfo(message);

				expect(response).toEqual({ message, status: 100 });
			});

			it('should return with 101 status code', () => {
				const response = SystemResponse.switchingProtocolsInfo(message);

				expect(response).toEqual({ message, status: 101 });
			});
		});
	});

	describe('test 2xx HTTP Status Codes', () => {
		describe('with default message and data', () => {
			it('should return with 200 status code', () => {
				const response = SystemResponse.success('', undefined);

				expect(response).toEqual({ message: 'Success', status: 200, data: {} });
			});

			it('should return with 201 status code', () => {
				const response = SystemResponse.contentCreated('', undefined);

				expect(response).toEqual({ message: 'Content Created', status: 201, data: {} });
			});

			it('should return with 204 status code', () => {
				const response = SystemResponse.contentDeleted('', undefined);

				expect(response).toEqual({ message: 'Content Deleted', status: 204, data: {} });
			});
		});

		describe('with custom message and data', () => {
			const data = { key: 'value' };

			it('should return with 200 status code', () => {
				const message = 'Successfully fetched the documents';
				const response = SystemResponse.success(message, data);

				expect(response).toEqual({ message, status: 200, data });
			});

			it('should return with 201 status code', () => {
				const message = 'Successfully created the document';
				const response = SystemResponse.contentCreated(message, data);

				expect(response).toEqual({ message, status: 201, data });
			});

			it('should return with 204 status code', () => {
				const message = 'Successfully deleted the document';
				const response = SystemResponse.contentDeleted(message, data);

				expect(response).toEqual({ message, status: 204, data });
			});
		});
	});

	describe('test 3xx HTTP Status Codes', () => {
		const message = 'custom message';

		it('should return with 300 status code', () => {
			const response = SystemResponse.multipleChoicesRedirect(message);

			expect(response).toEqual({ message, status: 300 });
		});

		it('should return with 301 status code', () => {
			const response = SystemResponse.movedPermanentlyRedirect(message);

			expect(response).toEqual({ message, status: 301 });
		});

		it('should return with 302 status code', () => {
			const response = SystemResponse.foundRedirect(message);

			expect(response).toEqual({ message, status: 302 });
		});

		it('should return with 303 status code', () => {
			const response = SystemResponse.seeOtherRedirect(message);

			expect(response).toEqual({ message, status: 303 });
		});

		it('should return with 304 status code', () => {
			const response = SystemResponse.notModifiedRedirect(message);

			expect(response).toEqual({ message, status: 304 });
		});

		it('should return with 305 status code', () => {
			const response = SystemResponse.useProxyRedirect(message);

			expect(response).toEqual({ message, status: 305 });
		});

		it('should return with 307 status code', () => {
			const response = SystemResponse.temporaryRedirect(message);

			expect(response).toEqual({ message, status: 307 });
		});
	});

	describe('test 4xx HTTP Status Codes', () => {
		describe('with default error message', () => {
			it('should return with 400 status code with default error message', () => {
				const response = SystemResponse.badRequestError('');

				const expectedResponse = {
					message: 'Bad Request',
					status: 400,
					errs: 'Bad Request',
				};

				expect(response).toEqual(expectedResponse);
			});

			it('should return with 401 status code with default error message', () => {
				const response = SystemResponse.unauthorizedError('');

				const expectedResponse = {
					message: 'Unauthorized',
					status: 401,
					errs: 'Unauthorized',
				};

				expect(response).toEqual(expectedResponse);
			});

			it('should return with 402 status code with default error message', () => {
				const response = SystemResponse.paymentRequiredError('');

				const expectedResponse = {
					message: 'Payment Required',
					status: 402,
					errs: 'Payment Required',
				};

				expect(response).toEqual(expectedResponse);
			});

			it('should return with 403 status code with default error message', () => {
				const response = SystemResponse.forbiddenError('');

				const expectedResponse = {
					message: 'Forbidden',
					status: 403,
					errs: 'Forbidden',
				};

				expect(response).toEqual(expectedResponse);
			});

			it('should return with 404 status code with default error message', () => {
				const response = SystemResponse.notFoundError('');

				const expectedResponse = {
					message: 'Not Found',
					status: 404,
					errs: 'Not Found',
				};

				expect(response).toEqual(expectedResponse);
			});

			it('should return with 405 status code with default error message', () => {
				const response = SystemResponse.methodNotAllowedError('');

				const expectedResponse = {
					message: 'Method Not Allowed',
					status: 405,
					errs: 'Method Not Allowed',
				};

				expect(response).toEqual(expectedResponse);
			});

			it('should return with 406 status code with default error message', () => {
				const response = SystemResponse.notAcceptableError('');

				const expectedResponse = {
					message: 'Not Acceptable',
					status: 406,
					errs: 'Not Acceptable',
				};

				expect(response).toEqual(expectedResponse);
			});

			it('should return with 407 status code with default error message', () => {
				const response = SystemResponse.proxyAuthRequiredError('');

				const expectedResponse = {
					message: 'Proxy Authentication Required',
					status: 407,
					errs: 'Proxy Authentication Required',
				};

				expect(response).toEqual(expectedResponse);
			});

			it('should return with 408 status code with default error message', () => {
				const response = SystemResponse.requestTimeoutError('');

				const expectedResponse = {
					message: 'Request Timeout',
					status: 408,
					errs: 'Request Timeout',
				};

				expect(response).toEqual(expectedResponse);
			});

			it('should return with 409 status code with default error message', () => {
				const response = SystemResponse.conflictError('');

				const expectedResponse = {
					message: 'Conflict',
					status: 409,
					errs: 'Conflict',
				};

				expect(response).toEqual(expectedResponse);
			});

			it('should return with 410 status code with default error message', () => {
				const response = SystemResponse.goneError('');

				const expectedResponse = {
					message: 'Gone',
					status: 410,
					errs: 'Gone',
				};

				expect(response).toEqual(expectedResponse);
			});

			it('should return with 411 status code with default error message', () => {
				const response = SystemResponse.lengthRequiredError('');

				const expectedResponse = {
					message: 'Length Required',
					status: 411,
					errs: 'Length Required',
				};

				expect(response).toEqual(expectedResponse);
			});

			it('should return with 412 status code with default error message', () => {
				const response = SystemResponse.preconditionFailedError('');

				const expectedResponse = {
					message: 'Precondition Failed',
					status: 412,
					errs: 'Precondition Failed',
				};

				expect(response).toEqual(expectedResponse);
			});

			it('should return with 413 status code with default error message', () => {
				const response = SystemResponse.requestEntityTooLargeError('');

				const expectedResponse = {
					message: 'Request Entity Too Large',
					status: 413,
					errs: 'Request Entity Too Large',
				};

				expect(response).toEqual(expectedResponse);
			});

			it('should return with 414 status code with default error message', () => {
				const response = SystemResponse.requestUriTooLongError('');

				const expectedResponse = {
					message: 'Request-URI Too Long',
					status: 414,
					errs: 'Request-URI Too Long',
				};

				expect(response).toEqual(expectedResponse);
			});

			it('should return with 415 status code with default error message', () => {
				const response = SystemResponse.unsupportedMediaTypeError('');

				const expectedResponse = {
					message: 'Unsupported Media Type',
					status: 415,
					errs: 'Unsupported Media Type'
				};

				expect(response).toEqual(expectedResponse);
			});

			it('should return with 416 status code with default error message', () => {
				const response = SystemResponse.rangeNotSatisfiableError('');

				const expectedResponse = {
					message: 'Requested Range Not Satisfiable',
					status: 416,
					errs: 'Requested Range Not Satisfiable',
				};

				expect(response).toEqual(expectedResponse);
			});

			it('should return with 417 status code with default error message', () => {
				const response = SystemResponse.expectationFailedError('');

				const expectedResponse = {
					message: 'Expectation Failed',
					status: 417,
					errs: 'Expectation Failed',
				};

				expect(response).toEqual(expectedResponse);
			});

			it('should return with 422 status code with default error message', () => {
				const response = SystemResponse.unProcessableEntityError('');

				const expectedResponse = {
					message: 'Unprocessable Entity',
					status: 422,
					errs: 'Unprocessable Entity',
				};

				expect(response).toEqual(expectedResponse);
			});
		});

		describe('with custom error message', () => {
			const message = 'wrong input';
			const errs = 'stacktrace';

			it('should return with 400 status code with default error message', () => {
				const response = SystemResponse.badRequestError(message, errs);
				const expectedResponse = { message, status: 400, errs };

				expect(response).toEqual(expectedResponse);
			});

			it('should return with 401 status code with default error message', () => {
				const response = SystemResponse.unauthorizedError(message, errs);
				const expectedResponse = { message, status: 401, errs };

				expect(response).toEqual(expectedResponse);
			});

			it('should return with 402 status code with default error message', () => {
				const response = SystemResponse.paymentRequiredError(message, errs);
				const expectedResponse = { message, status: 402, errs };

				expect(response).toEqual(expectedResponse);
			});

			it('should return with 403 status code with default error message', () => {
				const response = SystemResponse.forbiddenError(message, errs);
				const expectedResponse = { message, status: 403, errs };

				expect(response).toEqual(expectedResponse);
			});

			it('should return with 404 status code with default error message', () => {
				const response = SystemResponse.notFoundError(message, errs);
				const expectedResponse = { message, status: 404, errs };

				expect(response).toEqual(expectedResponse);
			});

			it('should return with 405 status code with default error message', () => {
				const response = SystemResponse.methodNotAllowedError(message, errs);
				const expectedResponse = { message, status: 405, errs };

				expect(response).toEqual(expectedResponse);
			});

			it('should return with 406 status code with default error message', () => {
				const response = SystemResponse.notAcceptableError(message, errs);
				const expectedResponse = { message, status: 406, errs };

				expect(response).toEqual(expectedResponse);
			});

			it('should return with 407 status code with default error message', () => {
				const response = SystemResponse.proxyAuthRequiredError(message, errs);
				const expectedResponse = { message, status: 407, errs };

				expect(response).toEqual(expectedResponse);
			});

			it('should return with 408 status code with default error message', () => {
				const response = SystemResponse.requestTimeoutError(message, errs);
				const expectedResponse = { message, status: 408, errs };

				expect(response).toEqual(expectedResponse);
			});

			it('should return with 409 status code with default error message', () => {
				const response = SystemResponse.conflictError(message, errs);
				const expectedResponse = { message, status: 409, errs };

				expect(response).toEqual(expectedResponse);
			});

			it('should return with 410 status code with default error message', () => {
				const response = SystemResponse.goneError(message, errs);
				const expectedResponse = { message, status: 410, errs };

				expect(response).toEqual(expectedResponse);
			});

			it('should return with 411 status code with default error message', () => {
				const response = SystemResponse.lengthRequiredError(message, errs);
				const expectedResponse = { message, status: 411, errs };

				expect(response).toEqual(expectedResponse);
			});

			it('should return with 412 status code with default error message', () => {
				const response = SystemResponse.preconditionFailedError(message, errs);
				const expectedResponse = { message, status: 412, errs };

				expect(response).toEqual(expectedResponse);
			});

			it('should return with 413 status code with default error message', () => {
				const response = SystemResponse.requestEntityTooLargeError(message, errs);
				const expectedResponse = { message, status: 413, errs };

				expect(response).toEqual(expectedResponse);
			});

			it('should return with 414 status code with default error message', () => {
				const response = SystemResponse.requestUriTooLongError(message, errs);
				const expectedResponse = { message, status: 414, errs };

				expect(response).toEqual(expectedResponse);
			});

			it('should return with 415 status code with default error message', () => {
				const response = SystemResponse.unsupportedMediaTypeError(message, errs);
				const expectedResponse = { message, status: 415, errs };

				expect(response).toEqual(expectedResponse);
			});

			it('should return with 416 status code with default error message', () => {
				const response = SystemResponse.rangeNotSatisfiableError(message, errs);
				const expectedResponse = { message, status: 416, errs };

				expect(response).toEqual(expectedResponse);
			});

			it('should return with 417 status code with default error message', () => {
				const response = SystemResponse.expectationFailedError(message, errs);
				const expectedResponse = { message, status: 417, errs };

				expect(response).toEqual(expectedResponse);
			});

			it('should return with 422 status code with default error message', () => {
				const response = SystemResponse.unProcessableEntityError(message, errs);
				const expectedResponse = { message, status: 422, errs };

				expect(response).toEqual(expectedResponse);
			});
		});
	});

	describe('test 5xx HTTP Status Codes', () => {
		describe('with default error message', () => {
			it('should return with 500 status code with default error message', () => {
				const message = 'wrong input';
				const response = SystemResponse.internalServerError(message);
				const expectedResponse = { message, status: 500, errs: 'Internal Server Error' };

				expect(response).toEqual(expectedResponse);
			});

			it('should return with 501 status code with default error message', () => {
				const message = 'wrong input';
				const response = SystemResponse.notImplementedError(message);
				const expectedResponse = { message, status: 501, errs: 'Not Implemented' };

				expect(response).toEqual(expectedResponse);
			});

			it('should return with 502 status code with default error message', () => {
				const message = 'wrong input';
				const response = SystemResponse.badGatewayError(message);
				const expectedResponse = { message, status: 502, errs: 'Bad Gateway' };

				expect(response).toEqual(expectedResponse);
			});

			it('should return with 503 status code with default error message', () => {
				const message = 'wrong input';
				const response = SystemResponse.serviceUnavailableError(message);
				const expectedResponse = { message, status: 503, errs: 'Service Unavailable' };

				expect(response).toEqual(expectedResponse);
			});

			it('should return with 504 status code with default error message', () => {
				const message = 'wrong input';
				const response = SystemResponse.gatewayTimeoutError(message);
				const expectedResponse = { message, status: 504, errs: 'Gateway Timeout' };

				expect(response).toEqual(expectedResponse);
			});

			it('should return with 505 status code with default error message', () => {
				const message = 'wrong input';
				const response = SystemResponse.httpVersionNotSupportedError(message);
				const expectedResponse = { message, status: 505, errs: 'HTTP Version Not Supported' };

				expect(response).toEqual(expectedResponse);
			});
		});

		describe('with custom error message', () => {
			const errs = 'stacktrace';

			it('should return with 500 status code with default error message', () => {
				const message = 'wrong input';
				const response = SystemResponse.internalServerError(message, errs);
				const expectedResponse = { message, status: 500, errs };

				expect(response).toEqual(expectedResponse);
			});

			it('should return with 501 status code with default error message', () => {
				const message = 'wrong input';
				const response = SystemResponse.notImplementedError(message, errs);
				const expectedResponse = { message, status: 501, errs };

				expect(response).toEqual(expectedResponse);
			});

			it('should return with 502 status code with default error message', () => {
				const message = 'wrong input';
				const response = SystemResponse.badGatewayError(message, errs);
				const expectedResponse = { message, status: 502, errs };

				expect(response).toEqual(expectedResponse);
			});

			it('should return with 503 status code with default error message', () => {
				const message = 'wrong input';
				const response = SystemResponse.serviceUnavailableError(message, errs);
				const expectedResponse = { message, status: 503, errs };

				expect(response).toEqual(expectedResponse);
			});

			it('should return with 504 status code with default error message', () => {
				const message = 'wrong input';
				const response = SystemResponse.gatewayTimeoutError(message, errs);
				const expectedResponse = { message, status: 504, errs };

				expect(response).toEqual(expectedResponse);
			});

			it('should return with 505 status code with default error message', () => {
				const message = 'wrong input';
				const response = SystemResponse.httpVersionNotSupportedError(message, errs);
				const expectedResponse = { message, status: 505, errs };

				expect(response).toEqual(expectedResponse);
			});
		});
	});
});
