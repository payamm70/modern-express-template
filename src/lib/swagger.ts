import { OpenApiGeneratorV3 } from "@asteasolutions/zod-to-openapi";
import schemas from "@/schemas";

// This is used to generate the Swagger schemas. You don't need to use nor modify this file
export const generator = new OpenApiGeneratorV3(schemas);
