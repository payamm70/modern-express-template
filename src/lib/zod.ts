import { z } from "zod";
import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";

/**
 * Extend Zod with OpenAPI support for generating Swagger documentation
 *
 * {@link docs-on-github-repo}
 */
extendZodWithOpenApi(z);

/**
 * You must use the `z` object from this file to define your schemas, instead of importing it
 * directly from the `zod` package
 *
 * This is because the `z` object from this file has been extended with OpenAPI support
 */
export { z };
