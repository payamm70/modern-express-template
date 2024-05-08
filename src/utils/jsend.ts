/**
 * JSend is a specification that gives a consistent structure for JSON responses. Make sure to use
 * this in all of your JSON responses in controllers
 *
 * See the JSend specification for more information
 *
 * {@link https://github.com/omniti-labs/jsend}
 */
export namespace JSend {
	export function success<T>(data: T): JSendResponse<T> {
		return {
			status: "success",
			data,
		};
	}

	export function fail<T>(data: T): JSendResponse<T> {
		return {
			status: "fail",
			data,
		};
	}

	export function error<T>(
		message: string,
		code?: number,
		data?: T
	): JSendResponse<T> {
		return {
			status: "error",
			message,
			code,
			data,
		};
	}
}
