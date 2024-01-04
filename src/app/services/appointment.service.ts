import { CreateAppointmentDto } from "../domain/dtos/create-appointment.dto";
import { Appointment } from "../domain/entities/appointment.entity";
import { AppointmentServicePort } from "../ports/input/appointment-service.port";

export class AppointmentService implements AppointmentServicePort {
  createAppointment(input: CreateAppointmentDto): Promise<Appointment> {
    throw new Error("Method not implemented.");
  }

  cancelAppointment(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
