import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import bodyParser from "body-parser";
import routes from "@/routes";
import dotenv from "@/lib/dotenv";
import databaseErrorHandler from "@/errors/database.handler";
import globalErrorHandler from "@/errors/global.handler";

import "@/lib/swagger";

const app = express();

app.use("/public", express.static("public"));

// Common middlewares for all routes
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.raw());
app.use(cookieParser());

app.use(
	cors({
		/**
		 * You can also set origin: "*" to allow all origins, but it's not recommended, since it's
		 * a security risk that allows CSRF attacks
		 *
		 * {@link https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html#custom-headers-and-cors}
		 */
		origin: [new RegExp("http://localhost:\\d+"), "https://example.com"],
		credentials: true,
	})
);

app.use("/api", routes);

// Error handlers. The global error handler must be the last middleware in the chain
app.use(databaseErrorHandler);
app.use(globalErrorHandler);

app.listen(dotenv.SERVER_PORT, () => {
	console.log(`🚀 Server is running on port ${dotenv.SERVER_PORT}`);
});
