// This is only an example file. You can safely delete it

import { RequestHandler } from "express";
import { JSend } from "@/utils/jsend";
import { validate } from "@/utils/validation";
import { getHelloMessage } from "@/services/hello.service";
import { helloReceiverSchema } from "@/schemas/hello.schema";

/**
 * @swagger
 * /api/hello:
 *   post:
 *     summary: Gets a hello (hey/hi) message from the sender to the receiver
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/HelloReceiverSchema'
 *     responses:
 *       200:
 *         description: The hello message
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/HelloMessageSchema'
 */
const post: RequestHandler = async (req, res) => {
	const { customPrefix, receiver } = await validate(
		req.body,
		helloReceiverSchema
	);

	// From foo middleware
	const { foo } = res.locals;

	const msg = getHelloMessage(foo, receiver, customPrefix);

	res.status(200).json(JSend.success(msg));
};

export default {
	post,
};
