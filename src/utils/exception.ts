import { StatusCodes } from "http-status-codes";

/**
 * Utility class for creating JSend exceptions with throwables. All JSend exceptions will be caught
 * by the global error handler and returned as a JSend response
 *
 * Does not work for versions prior to Express 5, since it's the only version that supports error
 * handling with throw for async functions
 *
 * {@link https://expressjs.com/en/guide/error-handling.html}
 */
export class JSendException<T> extends Error {
	public readonly status: StatusCodes;
	public readonly response: JSendResponse.Error<T> | JSendResponse.Fail<T>;

	constructor(
		status: StatusCodes,
		response: JSendResponse.Error<T> | JSendResponse.Fail<T>
	) {
		super();
		this.status = status;
		this.response = response;
	}
}
