import { z } from "@/lib/zod";

/**
 * JSend is a specification that gives a consistent structure for JSON responses. Make sure to use
 * this in all of your JSON responses in controllers
 *
 * See the JSend specification for more information
 *
 * {@link https://github.com/omniti-labs/jsend}
 */
export namespace JSend {
	export function success<T>(data: T): JSendResponse.Success<T> {
		return {
			status: "success",
			data,
		};
	}

	export function fail<T>(data: T): JSendResponse.Fail<T> {
		return {
			status: "fail",
			data,
		};
	}

	export function error<T>(
		message: string,
		code?: ErrorCode | number,
		data?: T
	): JSendResponse.Error<T> {
		return {
			status: "error",
			message,
			code,
			data,
		};
	}
}

/**
 * You can define custom error codes that can be used with JSend.error. You may use this to refine
 * the error handling of your application
 *
 * This is similar to Windows operating system error codes:
 *
 * {@link https://learn.microsoft.com/en-us/windows/win32/debug/system-error-codes--0-499-}
 */
export enum ErrorCode {
	SomeError = 1000,
	SomeOtherError = 1001,
}

/**
 * JSendSchema is a utility to create Zod schemas that follow the JSend specification. Use it in
 * your schema files to define the shape of the data that your API will send
 */
export namespace JSendSchema {
	export function success<T>(schema: z.ZodSchema<T>) {
		return z.object({
			status: z.literal("success"),
			data: schema,
		});
	}

	export function fail<T>(schema: z.ZodSchema<T>) {
		return z.object({
			status: z.literal("fail"),
			data: schema,
		});
	}

	export function error<T>(schema?: z.ZodSchema<T>) {
		return z.object({
			status: z.literal("error"),
			message: z.string(),
			code: z.number().optional(),
			data: schema,
		});
	}
}
