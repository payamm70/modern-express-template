import { z } from "zod";

export class ValidationError extends Error {
	public readonly formattedError: any;

	constructor(formattedError: any) {
		super();
		this.formattedError = formattedError;
	}
}

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
