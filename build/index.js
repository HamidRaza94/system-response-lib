"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  CODE_MESSAGES: () => CODE_MESSAGES,
  STATUS_CODES: () => STATUS_CODES,
  default: () => src_default
});
module.exports = __toCommonJS(src_exports);

// src/constants.ts
var STATUS_CODES = {
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
  HTTP_VERSION_NOT_SUPPORTED: 505
};
var CODE_MESSAGES = {
  // 1xx
  100: "Continue",
  101: "Switching Protocols",
  // 2xx
  200: "Success",
  201: "Content Created",
  204: "Content Deleted",
  // 3xx
  300: "Multiple Choices",
  301: "Moved Permanently",
  302: "Found",
  303: "See Other",
  304: "Not Modified",
  305: "Use Proxy",
  307: "Temporary Redirect",
  // 4xx
  400: "Bad Request",
  401: "Unauthorized",
  402: "Payment Required",
  403: "Forbidden",
  404: "Not Found",
  405: "Method Not Allowed",
  406: "Not Acceptable",
  407: "Proxy Authentication Required",
  408: "Request Timeout",
  409: "Conflict",
  410: "Gone",
  411: "Length Required",
  412: "Precondition Failed",
  413: "Request Entity Too Large",
  414: "Request-URI Too Long",
  415: "Unsupported Media Type",
  416: "Requested Range Not Satisfiable",
  417: "Expectation Failed",
  422: "Unprocessable Entity",
  // 5xx
  500: "Internal Server Error",
  501: "Not Implemented",
  502: "Bad Gateway",
  503: "Service Unavailable",
  504: "Gateway Timeout",
  505: "HTTP Version Not Supported"
};

// src/SystemResponse.ts
var SystemResponse = class _SystemResponse {
  static getInstance() {
    return new _SystemResponse();
  }
  static continueInfo(message) {
    return _SystemResponse.getInstance().getResponse(message, STATUS_CODES.CONTINUE);
  }
  static switchingProtocolsInfo(message) {
    return _SystemResponse.getInstance().getResponse(message, STATUS_CODES.SWITCHING_PROTOCOLS);
  }
  static success(message, data) {
    return {
      message: message || CODE_MESSAGES[STATUS_CODES.SUCCESS],
      status: STATUS_CODES.SUCCESS,
      data: data || {}
    };
  }
  static contentCreated(message, data) {
    return {
      message: message || CODE_MESSAGES[STATUS_CODES.CONTENT_CREATED],
      status: STATUS_CODES.CONTENT_CREATED,
      data: data || {}
    };
  }
  static contentDeleted(message, data) {
    return {
      message: message || CODE_MESSAGES[STATUS_CODES.CONTENT_DELETED],
      status: STATUS_CODES.CONTENT_DELETED,
      data: data || {}
    };
  }
  static multipleChoicesRedirect(message) {
    return _SystemResponse.getInstance().getResponse(message, STATUS_CODES.MULTIPLE_CHOICES);
  }
  static movedPermanentlyRedirect(message) {
    return _SystemResponse.getInstance().getResponse(message, STATUS_CODES.MOVED_PERMANENTLY);
  }
  static foundRedirect(message) {
    return _SystemResponse.getInstance().getResponse(message, STATUS_CODES.FOUND);
  }
  static seeOtherRedirect(message) {
    return _SystemResponse.getInstance().getResponse(message, STATUS_CODES.SEE_OTHER);
  }
  static notModifiedRedirect(message) {
    return _SystemResponse.getInstance().getResponse(message, STATUS_CODES.NOT_MODIFIED);
  }
  static useProxyRedirect(message) {
    return _SystemResponse.getInstance().getResponse(message, STATUS_CODES.USE_PROXY);
  }
  static temporaryRedirect(message) {
    return _SystemResponse.getInstance().getResponse(message, STATUS_CODES.TEMPORARY_REDIRECT);
  }
  static badRequestError(message, errs) {
    return _SystemResponse.getInstance().getErrorResponse(message, STATUS_CODES.BAD_REQUEST, errs);
  }
  static unauthorizedError(message, errs) {
    return _SystemResponse.getInstance().getErrorResponse(message, STATUS_CODES.UNAUTHORIZED, errs);
  }
  static paymentRequiredError(message, errs) {
    return _SystemResponse.getInstance().getErrorResponse(message, STATUS_CODES.PAYMENT_REQUIRED, errs);
  }
  static forbiddenError(message, errs) {
    return _SystemResponse.getInstance().getErrorResponse(message, STATUS_CODES.FORBIDDEN, errs);
  }
  static notFoundError(message, errs) {
    return _SystemResponse.getInstance().getErrorResponse(message, STATUS_CODES.NOT_FOUND, errs);
  }
  static methodNotAllowedError(message, errs) {
    return _SystemResponse.getInstance().getErrorResponse(message, STATUS_CODES.METHOD_NOT_ALLOWED, errs);
  }
  static notAcceptableError(message, errs) {
    return _SystemResponse.getInstance().getErrorResponse(message, STATUS_CODES.NOT_ACCEPTABLE, errs);
  }
  static proxyAuthRequiredError(message, errs) {
    return _SystemResponse.getInstance().getErrorResponse(message, STATUS_CODES.PROXY_AUTHENTICATION_REQUIRED, errs);
  }
  static requestTimeoutError(message, errs) {
    return _SystemResponse.getInstance().getErrorResponse(message, STATUS_CODES.REQUEST_TIMEOUT, errs);
  }
  static conflictError(message, errs) {
    return _SystemResponse.getInstance().getErrorResponse(message, STATUS_CODES.CONFLICT, errs);
  }
  static goneError(message, errs) {
    return _SystemResponse.getInstance().getErrorResponse(message, STATUS_CODES.GONE, errs);
  }
  static lengthRequiredError(message, errs) {
    return _SystemResponse.getInstance().getErrorResponse(message, STATUS_CODES.LENGTH_REQUIRED, errs);
  }
  static preconditionFailedError(message, errs) {
    return _SystemResponse.getInstance().getErrorResponse(message, STATUS_CODES.PRECONDITION_FAILED, errs);
  }
  static requestEntityTooLargeError(message, errs) {
    return _SystemResponse.getInstance().getErrorResponse(message, STATUS_CODES.REQUEST_ENTITY_TOO_LARGE, errs);
  }
  static requestUriTooLongError(message, errs) {
    return _SystemResponse.getInstance().getErrorResponse(message, STATUS_CODES.REQUEST_URI_TOO_LONG, errs);
  }
  static unsupportedMediaTypeError(message, errs) {
    return _SystemResponse.getInstance().getErrorResponse(message, STATUS_CODES.UNSUPPORTED_MEDIA_TYPE, errs);
  }
  static rangeNotSatisfiableError(message, errs) {
    return _SystemResponse.getInstance().getErrorResponse(message, STATUS_CODES.REQUESTED_RANGE_NOT_SATISFIABLE, errs);
  }
  static expectationFailedError(message, errs) {
    return _SystemResponse.getInstance().getErrorResponse(message, STATUS_CODES.EXPECTATION_FAILED, errs);
  }
  static unProcessableEntityError(message, errs) {
    return _SystemResponse.getInstance().getErrorResponse(message, STATUS_CODES.UN_PROCESSABLE_ENTITY, errs);
  }
  static internalServerError(message, errs) {
    return _SystemResponse.getInstance().getErrorResponse(message, STATUS_CODES.INTERNAL_SERVER_ERROR, errs);
  }
  static notImplementedError(message, errs) {
    return _SystemResponse.getInstance().getErrorResponse(message, STATUS_CODES.NOT_IMPLEMENTED, errs);
  }
  static badGatewayError(message, errs) {
    return _SystemResponse.getInstance().getErrorResponse(message, STATUS_CODES.BAD_GATEWAY, errs);
  }
  static serviceUnavailableError(message, errs) {
    return _SystemResponse.getInstance().getErrorResponse(message, STATUS_CODES.SERVICE_UNAVAILABLE, errs);
  }
  static gatewayTimeoutError(message, errs) {
    return _SystemResponse.getInstance().getErrorResponse(message, STATUS_CODES.GATEWAY_TIME_OUT, errs);
  }
  static httpVersionNotSupportedError(message, errs) {
    return _SystemResponse.getInstance().getErrorResponse(message, STATUS_CODES.HTTP_VERSION_NOT_SUPPORTED, errs);
  }
  getErrorResponse(message, code, errs) {
    return {
      message: message || CODE_MESSAGES[code],
      status: code,
      errs: errs || CODE_MESSAGES[code]
    };
  }
  getResponse(message, code) {
    return {
      message: message || CODE_MESSAGES[code],
      status: code
    };
  }
};
var SystemResponse_default = SystemResponse;

// src/index.ts
var src_default = SystemResponse_default;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CODE_MESSAGES,
  STATUS_CODES
});
