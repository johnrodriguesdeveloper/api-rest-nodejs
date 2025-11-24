import fastify from "fastify";
import { db } from "./database.js";
import { env } from "./env/index.js";

const app = fastify();

app.get("/", async () => {
  const tables = await db("sqlite_schema").select("*");
  return tables;
});

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log("HTTP server running!");
  });
