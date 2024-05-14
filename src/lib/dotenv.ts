import "dotenv/config";
import { str, host, port, cleanEnv } from "envalid";

/**
 * Use this exported object to access environment variables instead of using process.env directly.
 * This will ensure type safety for your environment variables
 */
export default cleanEnv(process.env, {
	// Database
	DB_HOSTNAME: host({ devDefault: "localhost" }),
	DB_PORT: port({ devDefault: 5432 }),
	DB_USERNAME: str(),
	DB_PASSWORD: str(),
	DB_NAME: str(),

	// Server
	SERVER_PORT: port({ devDefault: 3000 }),
});
