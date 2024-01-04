import { z } from "zod";

export const userRole = z.enum(["admin", "customer", "professional"]);

export const userSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  role: userRole.default("customer"),
  created_at: z.date(),
  updated_at: z.date(),
});

export type User = z.infer<typeof userSchema>;
