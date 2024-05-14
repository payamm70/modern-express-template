import { ErrorRequestHandler } from "express";
import { DrizzleError } from "drizzle-orm";
import { JSendException } from "@/utils/exception";

/**
 * Handles all Drizzle errors and converts them to JSend exceptions
 */
const handler: ErrorRequestHandler = (err, req, res, next) => {
	if (err instanceof DrizzleError) {
		return next(
			new JSendException(500, {
				status: "error",
				message: err.message,
			})
		);
	}

	next(err);
};

export default handler;
