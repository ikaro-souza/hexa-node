import { z } from "zod";

export const salonSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  owner_id: z.string().uuid(),
  created_at: z.date(),
  updated_at: z.date(),
  professionals_ids: z.array(z.string().uuid()),
});

export type Salon = z.infer<typeof salonSchema>;
