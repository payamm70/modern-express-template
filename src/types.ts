// You can declare your own global types in here
declare global {
	namespace JSendResponse {
		type Success<T> = {
			status: "success";
			data: T;
		};

		type Fail<T> = {
			status: "fail";
			data: T;
		};

		type Error<T = {}> = {
			status: "error";
			message: string;
			code?: number;
			data?: T;
		};
	}
}

export default {};
