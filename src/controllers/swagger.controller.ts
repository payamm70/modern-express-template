import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import { generator } from "@/lib/swagger";

const specOptions = {
	failOnErrors: true,
	definition: {
		openapi: "3.0.0",
		info: {
			title: "Modern Express Template",
			version: "1.0.0",
		},
		...generator.generateComponents(),
	},
	apis: ["../**/*.ts"],
};

const uiOptions = {
	swaggerOptions: {
		url: "/api/docs/swagger.json",
	},
};

export const swaggerSpec = swaggerJsdoc(specOptions);

export const swaggerServe = swaggerUi.serveFiles(null, uiOptions);

export const swaggerSetup = swaggerUi.setup(null, uiOptions);
