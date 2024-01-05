import { CreateAppointmentDto } from "../domain/dtos/create-appointment.dto";
import { Appointment } from "../domain/entities/appointment.entity";
import { AppointmentServicePort } from "../ports/input/appointment-service.port";
import { AppointmentRepositoryPort } from "../ports/output/appointment-repository.port";

export class AppointmentService implements AppointmentServicePort {
  constructor(private readonly _repository: AppointmentRepositoryPort) {}

  createAppointment(input: CreateAppointmentDto): Promise<Appointment> {
    throw new Error("Method not implemented.");
  }

  cancelAppointment(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
