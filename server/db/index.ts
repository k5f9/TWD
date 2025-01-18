import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

const queryClient = postgres('postgres://root:root@localhost:5432/TWD');
export const db = drizzle({ client: queryClient });


export * from './schemas/user.schema';