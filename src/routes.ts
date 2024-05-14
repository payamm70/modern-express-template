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

router.get("/docs/swagger.json", (req, res) => res.json(swaggerSpec));
router.use("/docs", swaggerServe, swaggerSetup);
router.get("/hello", fooMiddleware, helloController);

export default router;
