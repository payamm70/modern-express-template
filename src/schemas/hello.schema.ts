import { z } from "@/lib/zod";
import { JSendSchema } from "@/utils/jsend";

export const helloReceiverSchema = z
	.object({
		customPrefix: z.enum(["Hey", "Hi"]).optional(),
		receiver: z.string().min(1),
	})
	.openapi("HelloReceiverSchema", {
		description: "Schema for the request body of POST /api/hello",
		example: {
			customPrefix: "Hey",
			receiver: "World",
		},
	});

export const helloMessageSchema = JSendSchema.success(z.string()).openapi(
	"HelloMessageSchema",
	{
		description: "Schema for the response body of POST /api/hello",
		example: {
			status: "success",
			data: "Hey, World! I am Banana",
		},
	}
);

export default [helloReceiverSchema, helloMessageSchema];
