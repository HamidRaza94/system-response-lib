## System Response Library

This library will transform your HTTP response to the defined format.


## Installation and Setup Instructions

#### Using NPM:

`npm install system-response-lib`

#### Using YARN:

`yarn add system-response-lib`


## How to Use

#### Using ESM:

```
import SystemResponse from 'system-response-lib';

const data = {
  key: 'value',
};

const response = SystemResponse.success('your message', data);
```

#### Using CJS:

```
const SystemResponse = require('system-response-lib').default;

const data = {
  key: 'value',
};

const response = SystemResponse.success('your message', data);
```


## All Supported Methods

#### HTTP Status Code - 1xx

###### response type

```
{
  message: string;
  status: number;
}
```

###### continue - 100 status code

```
SystemResponse.continueInfo('your message');
```

###### switching protocol - 101 status code

```
SystemResponse.switchingProtocolsInfo('your message');
```

#### HTTP Status Code - 2xx

###### response type

```
{
  message: string;
  status: number;
  data: any;
}
```

###### success - 200 status code

```
const data = { key: 'value' };
SystemResponse.success('your message', data);
```

###### content created - 201 status code

```
const data = { key: 'value' };
SystemResponse.contentCreated('your message', data);
```

###### content deleted - 204 status code

```
const data = { key: 'value' };
SystemResponse.contentDeleted('your message');
```

#### HTTP Status Code - 3xx

###### response type

```
{
  message: string;
  status: number;
}
```

###### multiple choices - 300 status code

```
SystemResponse.multipleChoicesRedirect('your message');
```

###### moved permanently - 301 status code

```
SystemResponse.movedPermanentlyRedirect('your message');
```

###### found redirect - 302 status code

```
SystemResponse.foundRedirect('your message');
```

###### see other redirect - 303 status code

```
SystemResponse.seeOtherRedirect('your message');
```

###### not modified redirect - 304 status code

```
SystemResponse.notModifiedRedirect('your message');
```

###### proxy redirect - 305 status code

```
SystemResponse.useProxyRedirect('your message');
```

###### temporary redirect - 307 status code

```
SystemResponse.temporaryRedirect('your message');
```

#### HTTP Status Code - 4xx

###### response type

```
{
  message: string;
  status: number;
  errs: any;
}
```

###### bad request - 400 status code

```
SystemResponse.badRequestError('your message', 'stacktrace');
```

###### unauthorized access - 401 status code

```
SystemResponse.unauthorizedError('your message', 'stacktrace');
```

###### payment required error - 402 status code

```
SystemResponse.paymentRequiredError('your message', 'stacktrace');
```

###### forbidden error - 403 status code

```
SystemResponse.forbiddenError('your message', 'stacktrace');
```

###### not found error - 404 status code

```
SystemResponse.notFoundError('your message', 'stacktrace');
```

###### method not allowed error - 405 status code

```
SystemResponse.methodNotAllowedError('your message', 'stacktrace');
```

###### not acceptable error - 406 status code

```
SystemResponse.notAcceptableError('your message', 'stacktrace');
```

###### proxy auth required error - 407 status code

```
SystemResponse.proxyAuthRequiredError('your message', 'stacktrace');
```

###### request timeout error - 408 status code

```
SystemResponse.requestTimeoutError('your message', 'stacktrace');
```

###### conflict error - 409 status code

```
SystemResponse.conflictError('your message', 'stacktrace');
```

###### gone error - 410 status code

```
SystemResponse.goneError('your message', 'stacktrace');
```

###### length required error - 411 status code

```
SystemResponse.lengthRequiredError('your message', 'stacktrace');
```

###### precondition failed error - 412 status code

```
SystemResponse.preconditionFailedError('your message', 'stacktrace');
```

###### request entity too large error - 413 status code

```
SystemResponse.requestEntityTooLargeError('your message', 'stacktrace');
```

###### request uri too long error - 414 status code

```
SystemResponse.requestUriTooLongError('your message', 'stacktrace');
```

###### unsupported media type error - 415 status code

```
SystemResponse.unsupportedMediaTypeError('your message', 'stacktrace');
```

###### range not satisfiable error - 416 status code

```
SystemResponse.rangeNotSatisfiableError('your message', 'stacktrace');
```

###### expectation failed error - 417 status code

```
SystemResponse.expectationFailedError('your message', 'stacktrace');
```

###### un processable entity error - 422 status code

```
SystemResponse.unProcessableEntityError('your message', 'stacktrace');
```

#### HTTP Status Code - 5xx

###### response type

```
{
  message: string;
  status: number;
  errs: any;
}
```

###### internal server error - 500 status code

```
SystemResponse.internalServerError('your message', 'stacktrace');
```

###### not implemented error - 501 status code

```
SystemResponse.notImplementedError('your message', 'stacktrace');
```

###### bad gateway error - 502 status code

```
SystemResponse.badGatewayError('your message', 'stacktrace');
```

###### service unavailable error - 503 status code

```
SystemResponse.serviceUnavailableError('your message', 'stacktrace');
```

###### gateway timeout error - 504 status code

```
SystemResponse.gatewayTimeoutError('your message', 'stacktrace');
```

###### http version not supported error - 505 status code

```
SystemResponse.httpVersionNotSupportedError('your message', 'stacktrace');
```


## All Supported HTTP Status Codes

```
// 1xx
CONTINUE: 100,
SWITCHING_PROTOCOLS: 101,

// 2xx
SUCCESS: 200,
CONTENT_CREATED: 201,
CONTENT_DELETED: 204,

// 3xx
MULTIPLE_CHOICES: 300,
MOVED_PERMANENTLY: 301,
FOUND: 302,
SEE_OTHER: 303,
NOT_MODIFIED: 304,
USE_PROXY: 305,
TEMPORARY_REDIRECT: 307,

// 4xx
BAD_REQUEST: 400,
UNAUTHORIZED: 401,
PAYMENT_REQUIRED: 402,
FORBIDDEN: 403,
NOT_FOUND: 404,
METHOD_NOT_ALLOWED: 405,
NOT_ACCEPTABLE: 406,
PROXY_AUTHENTICATION_REQUIRED: 407,
REQUEST_TIMEOUT: 408,
CONFLICT: 409,
GONE: 410,
LENGTH_REQUIRED: 411,
PRECONDITION_FAILED: 412,
REQUEST_ENTITY_TOO_LARGE: 413,
REQUEST_URI_TOO_LONG: 414,
UNSUPPORTED_MEDIA_TYPE: 415,
REQUESTED_RANGE_NOT_SATISFIABLE: 416,
EXPECTATION_FAILED: 417,
UN_PROCESSABLE_ENTITY: 422,

// 5xx
INTERNAL_SERVER_ERROR: 500,
NOT_IMPLEMENTED: 501,
BAD_GATEWAY: 502,
SERVICE_UNAVAILABLE: 503,
GATEWAY_TIME_OUT: 504,
HTTP_VERSION_NOT_SUPPORTED: 505,
```
