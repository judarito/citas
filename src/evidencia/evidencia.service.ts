import { Client } from '@libsql/client/.';
import { Inject, Injectable } from '@nestjs/common';
import { Evidencia } from 'src/Interfaces/Evidencia';

@Injectable()
export class EvidenciaService {
    constructor(@Inject('DBCONN') private readonly connection: Client){}

    async getAll(): Promise<Evidencia[]> {
        const { rows } = await this.connection.execute("SELECT * FROM Evidencia");
        return rows as Evidencia[];
    }

    async getById(id: number): Promise<Evidencia> {
        const { rows } = await this.connection.execute({
            sql: "SELECT * FROM Evidencia WHERE IdEvidencia = ?",
            args: [id.toString()]
        });
        return rows[0] as Evidencia;
    }

    async deleteById(id: number): Promise<void> {
        await this.connection.execute({
            sql: "DELETE FROM Evidencia WHERE IdEvidencia = ?",
            args: [id.toString()]
        });
    }

    async add(evidencia: Evidencia): Promise<Evidencia> {
        await this.connection.execute({
            sql: "INSERT INTO Evidencia (IdCita, Nombre, RutaArchivo) VALUES (?, ?, ?)",
            args: [evidencia.IdCita, evidencia.Nombre, evidencia.RutaArchivo]
        });
        return evidencia;
    }
}
