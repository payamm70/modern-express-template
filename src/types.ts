declare global {
	export type JSendResponse<T> =
		| {
				status: "success";
				data: T;
		  }
		| {
				status: "fail";
				data: T;
		  }
		| {
				status: "error";
				message: string;
				code?: number;
				data?: T;
		  };
}

export default {};
