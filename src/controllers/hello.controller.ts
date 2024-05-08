import { RequestHandler } from "express";
import { z } from "zod";
import { JSend } from "@/utils/jsend";
import { getData } from "@/services/hello.controller";
import { validate } from "@/utils/validation";

const controller: RequestHandler = async (req, res) => {
	const { id } = await validate(
		req.body,
		z.object({
			id: z.string(),
			foo: z.string().optional(),
		})
	);

	const data = getData(id);

	res.status(200).json(JSend.success(data));
};

export default controller;
