import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";

const specOptions = {
	definition: {
		openapi: "3.0.0",
		info: {
			title: "Hello World",
			version: "1.0.0",
		},
	},
	apis: ["../*.ts"],
};

const uiOptions = {
	swaggerOptions: {
		url: "/docs/swagger.json",
	},
};

export const swaggerSpec = swaggerJsdoc(specOptions);

export const swaggerServe = swaggerUi.serveFiles(null, uiOptions);

export const swaggerSetup = swaggerUi.setup(null, uiOptions);
