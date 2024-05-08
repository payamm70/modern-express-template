import { RequestHandler } from "express";
import { z } from "zod";
import { JSend } from "@/utils/jsend";
import { getData } from "@/services/hello.controller";
import { validateBody } from "@/utils/validation";

const controller: RequestHandler = async (req, res, next) => {
	const bodySchema = z.object({ id: z.string(), foo: z.string().optional() });

	const { id } = await validateBody(req, bodySchema);

	const data = getData(id);

	res.status(200).json(JSend.success(data));
};

export default controller;
