import { z } from "zod";

export class ValidationError<T> extends Error {
	public readonly formattedError: z.ZodFormattedError<T>;

	constructor(formattedError: z.ZodFormattedError<T>) {
		super();
		this.formattedError = formattedError;
	}
}

/**
 * Useful for validating incoming data from the client. Use this function inside your controllers
 *
 * @param value The data to validate (req.body, req.query, ...)
 * @param schema The schema to validate the data against
 * @returns A promise that resolves to the validated data
 * @throws ValidationError if the data is invalid
 */
export async function validate<T extends z.ZodSchema>(
	value: any,
	schema: T
): Promise<Required<z.infer<T>>> {
	const { success, error, data } = await schema.safeParseAsync(value);

	if (!success) {
		throw new ValidationError(error.format());
	}

	return data;
}
