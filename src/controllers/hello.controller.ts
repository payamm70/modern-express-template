// This is only an example file. You can safely delete it

import { RequestHandler } from "express";
import { z } from "zod";
import { JSend } from "@/utils/jsend";
import { validate } from "@/utils/validation";
import { getHelloMessage } from "@/services/hello.service";

const controller: RequestHandler = async (req, res) => {
	const { name, customPrefix } = await validate(
		req.body,
		z.object({
			customPrefix: z.enum(["Hey", "Hi"]).optional(),
			name: z.string().min(1),
		})
	);

	const msg = getHelloMessage(name, customPrefix);

	res.status(200).json(JSend.success(msg));
};

export default controller;
