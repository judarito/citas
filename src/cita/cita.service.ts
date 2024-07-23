import { Client } from '@libsql/client/.';
import { Inject, Injectable } from '@nestjs/common';
import { Cita } from 'src/Interfaces/Cita';

@Injectable()
export class CitaService {
    constructor(@Inject('DBCONN') private readonly connection: Client){}

    async getAll(): Promise<Cita[]> {
        const { rows } = await this.connection.execute("SELECT * FROM Cita");
        return rows as Cita[];
    }

    async getById(id: number): Promise<Cita> {
        const { rows } = await this.connection.execute({
            sql: "SELECT * FROM Cita WHERE idCita = ?",
            args: [id.toString()]
        });
        return rows[0] as Cita;
    }

    async deleteById(id: number): Promise<void> {
        await this.connection.execute({
            sql: "DELETE FROM Cita WHERE idCita = ?",
            args: [id.toString()]
        });
    }

    async add(cita: Cita): Promise<Cita> {
        await this.connection.execute({
            sql: "INSERT INTO Cita (IdPaciente, IdDoctor, FechaCita, Descripcion, Estado) VALUES (?, ?, ?, ?, ?)",
            args: [cita.IdPaciente, cita.IdDoctor, cita.FechaCita, cita.Descripcion, cita.Estado]
        });
        return cita;
    }

    async update(cita: Cita): Promise<Cita> {
        await this.connection.execute({
            sql: "UPDATE Cita SET IdPaciente = ?, IdDoctor = ?, FechaCita = ?, Descripcion = ?, Estado = ? WHERE idCita = ?",
            args: [cita.IdPaciente, cita.IdDoctor, cita.FechaCita, cita.Descripcion, cita.Estado, cita.idCita]
        });
        return cita;
    }
}
