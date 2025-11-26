// eslint-disable-next-line
import { Knex } from "knex";

declare module "kenx/types/tables" {
  export interface Tables {
    transactions: {
      id: string;
      tittle: string;
      amount: number;
      created_ad: string;
      session_id?: string;
    };
  }
}
