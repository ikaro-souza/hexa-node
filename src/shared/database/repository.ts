import { SQLWrapper } from "drizzle-orm";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

const queryClient = postgres("postgres://postgres:adminadmin@0.0.0.0:5432/db");
const db = drizzle(queryClient);
type Database = { execute: (query: SQLWrapper) => void };

export class BaseRepository {
  protected db: Database;

  constructor() {
    this.db = db;
  }
}
