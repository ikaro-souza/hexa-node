import { z } from "zod";

export const appointmentSchema = z.object({
  id: z.string().uuid(),
  starts_at: z.date(),
  services_id: z.array(z.string().uuid()),
  professional_id: z.string().uuid(),
  salon_id: z.string().uuid(),
});

export type Appointment = z.infer<typeof appointmentSchema>;
