declare global {
	export namespace JSendResponse {
		export type Success<T> = {
			status: "success";
			data: T;
		};

		export type Fail<T> = {
			status: "fail";
			data: T;
		};

		export type Error<T = {}> = {
			status: "error";
			message: string;
			code?: number;
			data?: T;
		};
	}
}

export default {};
