import { JSendException } from "@/utils/exception";
import { JSend } from "@/utils/jsend";
import type { ErrorRequestHandler } from "express";

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
	if (err instanceof JSendException) {
		return res.status(err.status).json(err.response);
	}

	console.error(err);

	res.status(500).json(JSend.error("Internal Server Error"));
};

export default errorHandler;
