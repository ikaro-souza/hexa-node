import { DIContainer } from "rsdi";
import { AppointmentRepository } from "./adapters/driven/appointment-repository";
import { AppointmentController } from "./adapters/drivers/appointment.controller";
import { AppointmentService } from "./app/services/appointment.service";

export function configureDI() {
  return new DIContainer()
    .add("appointmentRepository", () => new AppointmentRepository())
    .add(
      "appointmentService",
      ({ appointmentRepository }) =>
        new AppointmentService(appointmentRepository)
    )
    .add(
      "appointmentController",
      ({ appointmentService }) => new AppointmentController(appointmentService)
    );
}
