import { z } from "zod";

export const serviceSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  description: z.string(),
  price: z.number(),
  duration_in_minutes: z.number(),
  salon_id: z.string().uuid(),
});

export type Service = z.infer<typeof serviceSchema>;
