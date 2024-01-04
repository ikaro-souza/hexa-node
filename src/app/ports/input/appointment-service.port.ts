import { CreateAppointmentDto } from "../../domain/dtos/create-appointment.dto";
import { Appointment } from "../../domain/entities/appointment.entity";

export interface AppointmentServicePort {
  createAppointment(input: CreateAppointmentDto): Promise<Appointment>;
  cancelAppointment(id: string): Promise<void>;
}
