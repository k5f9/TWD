import {integer, pgEnum, pgTable, serial, varchar, boolean} from "drizzle-orm/pg-core";

export const UserRoleEnum = pgEnum('role', ['user', 'moderator', 'admin']);

export const UserSchema = pgTable('user', {
    id: serial('id').primaryKey(),
    username: varchar('username', { length: 255 }).unique(),
    nickname_minecraft: varchar('nickname', { length: 255 }).unique(),
    email: varchar('email', { length: 255 }),
    verification: boolean('verification').default(false),
});