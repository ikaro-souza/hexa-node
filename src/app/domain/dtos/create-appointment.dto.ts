import { z } from "zod";
import { appointmentSchema } from "../entities/appointment.entity";

export const createAppointmentDtoSchema = appointmentSchema.omit({
  id: true,
});
export type CreateAppointmentDto = z.infer<typeof createAppointmentDtoSchema>;
