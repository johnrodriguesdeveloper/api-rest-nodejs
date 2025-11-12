import knex from "knex";

export const config = knex({
  client: "sqlite",
  connection: {
    filename: "./tmp/app.db",
  },
  useNullAsDefault: true,
});

export const db = knex(config);
