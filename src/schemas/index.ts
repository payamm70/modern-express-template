/**
 * Schemas are equivalent to DTOs (Data Transfer Objects). Use them to define the shape of the data
 * that your API will receive (request) and send (response)
 *
 * Schemas will also be used in your Swagger documentation to describe the shape of the data that
 * your endpoints will receive and send
 *
 * By exporting a schema from this file, it will be automatically included in the generated Swagger
 *
 * Notice: This file will be automatically updated when you run the `add:controller` script, so you
 * don't need to worry about importing the schemas manually
 */
import helloSchemas from "@/schemas/hello.schema";

export default [].concat(helloSchemas);
