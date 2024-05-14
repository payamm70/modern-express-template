import { z } from "zod";
import { JSendException } from "@/utils/exception";

/**
 * Useful for validating incoming data from the client. Use this function inside your controllers
 *
 * @param value The data to validate (req.body, req.query, ...)
 * @param schema The Zod schema to validate the data against
 * @returns A promise that resolves to the validated data
 * @throws JSendException if the data is invalid
 */
export async function validate<T extends z.ZodSchema>(
	value: any,
	schema: T
): Promise<z.infer<T>> {
	const { success, error, data } = await schema.safeParseAsync(value);

	if (!success) {
		throw new JSendException(400, {
			status: "fail",
			data: error.format(),
		});
	}

	return data;
}
