import express from "express";
import { AppointmentServicePort } from "../../app/ports/input/appointment-service.port";

export class AppointmentController {
  constructor(private readonly _service: AppointmentServicePort) {}

  async createAppointment() {}
}

export const appointmentsRouter = express.Router();
