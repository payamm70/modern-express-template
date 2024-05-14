import dotenv from "@/lib/dotenv";
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

/**
 * You can also use Client instead of Pool if you want to use:
 *
 * 1. A single client connection
 * 2. Transactions
 *
 * {@link https://node-postgres.com/features/transactions}
 */
const pool = new Pool({
	host: dotenv.DB_HOSTNAME,
	port: dotenv.DB_PORT,
	user: dotenv.DB_USERNAME,
	password: dotenv.DB_PASSWORD,
	database: dotenv.DB_NAME,
});

export default drizzle(pool);
