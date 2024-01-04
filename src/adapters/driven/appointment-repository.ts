import { sql } from "drizzle-orm";
import { CreateAppointmentDto } from "../../app/domain/dtos/create-appointment.dto";
import { Appointment } from "../../app/domain/entities/appointment.entity";
import { AppointmentRepositoryPort } from "../../app/ports/output/appointment-repository.port";
import { BaseRepository } from "../../shared/database/repository";

export class AppointmentRepository
  extends BaseRepository
  implements AppointmentRepositoryPort
{
  createAppointment(input: CreateAppointmentDto): Promise<Appointment> {
    const query = sql``;
    query.append(sql`INSERT INTO appointments (starts_at,)`);
    this.db.execute(sql`INSERT INTO`);
  }

  cancelAppointment(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
