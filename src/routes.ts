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

/**
 * @swagger
 * /api/hello:
 *   get:
 *     description: Get a hello (hey/hi) message from the sender to the receiver
 *     responses:
 *       200:
 *         description: Returns the hello message
 *       400:
 *         description: Invalid request body
 */
router.get("/hello", fooMiddleware, helloController);

export default router;
