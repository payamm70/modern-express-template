import { Request } from "express";
import { z } from "zod";

export class ValidationError extends Error {
	public readonly formattedError: any;

	constructor(formattedError: any) {
		super();
		this.formattedError = formattedError;
	}
}

async function validate<T extends z.ZodSchema>(
	schema: T,
	value: any
): Promise<Required<z.infer<T>>> {
	const { success, error, data } = await schema.safeParseAsync(value);

	if (!success) {
		throw new ValidationError(error.format());
	}

	return data;
}

export async function validateBody(req: Request, schema: z.ZodSchema) {
	return await validate(schema, req.body);
}

export async function validateQuery(req: Request, schema: z.ZodSchema) {
	return await validate(schema, req.query);
}
