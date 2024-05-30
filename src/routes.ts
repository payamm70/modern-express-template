/**
 * This is where you define your routes and Swagger documentation with JSDoc comments
 */

import express from "express";

// Controllers
import {
	swaggerSpec,
	swaggerServe,
	swaggerSetup,
} from "@/controllers/swagger.controller";
import helloController from "@/controllers/hello.controller";

// Middlewares
import fooMiddleware from "@/middlewares/foo.middleware";

const router = express.Router();

// Swagger documentation
router.get("/docs/swagger.json", (req, res) => res.json(swaggerSpec));
router.use("/docs", swaggerServe, swaggerSetup);

// Routes
router.post("/hello", fooMiddleware, helloController.post);

export default router;
