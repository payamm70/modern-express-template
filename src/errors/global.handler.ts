import { JSendException } from "@/utils/exception";
import { JSend } from "@/utils/jsend";
import type { ErrorRequestHandler } from "express";

/**
 * Global error handler for the application. This function should be the last middleware in the chain
 * to catch any errors that were not handled by the other middlewares
 *
 * You can use JSendException to throw errors from your controllers and services
 */
const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
	if (err instanceof JSendException) {
		return res.status(err.status).json(err.response);
	}

	console.error(err);

	/**
	 * Any errors that were not manually throw with JSendException will return a 500 status code
	 *
	 * Ideally, the API should not reach this point. Instead, all errors should be handled by
	 * throwing JSendException with the appropriate status code and response
	 *
	 * A good pattern for that is creating a chain of error handlers to handle different types of
	 * errors that are not manually throwed (database errors, ...) and convert them to
	 * JSendException before reaching the global error handler. This is done, for example, in the
	 * `src/errors/database.handler.ts` file
	 */
	res.status(500).json(JSend.error("Internal Server Error"));
};

export default globalErrorHandler;
