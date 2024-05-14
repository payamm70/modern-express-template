// This is only an example file. You can safely delete it

import { RequestHandler } from "express";

const handler: RequestHandler = (req, res, next) => {
	res.locals.foo = "Banana";

	next();
};

export default handler;
