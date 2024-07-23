import { Client } from '@libsql/client/.';
import { Inject, Injectable } from '@nestjs/common';
import { Procedimiento } from 'src/Interfaces/Procedimiento';

@Injectable()
export class ProcedimientoService {
    constructor(@Inject('DBCONN') private readonly connection: Client){}

    async getAll(): Promise<Procedimiento[]> {
        const { rows } = await this.connection.execute("SELECT * FROM Procedimiento");
        return rows as Procedimiento[];
    }

    async getById(id: number): Promise<Procedimiento> {
        const { rows } = await this.connection.execute({
            sql: "SELECT * FROM Procedimiento WHERE IdProcedimiento = ?",
            args: [id.toString()]
        });
        return rows[0] as Procedimiento;
    }

    async deleteById(id: number): Promise<void> {
        await this.connection.execute({
            sql: "DELETE FROM Procedimiento WHERE IdProcedimiento = ?",
            args: [id.toString()]
        });
    }

    async add(procedimiento: Procedimiento): Promise<Procedimiento> {
        await this.connection.execute({
            sql: "INSERT INTO Procedimiento (IdCita, Descripcion) VALUES (?, ?)",
            args: [procedimiento.IdCita, procedimiento.Descripcion]
        });
        return procedimiento;
    }
}
