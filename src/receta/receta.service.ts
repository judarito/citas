import { Client } from '@libsql/client/.';
import { Inject, Injectable } from '@nestjs/common';
import { Receta } from 'src/Interfaces/Receta';

@Injectable()
export class RecetaService {
    constructor(@Inject('DBCONN') private readonly connection: Client){}

    async getAll(): Promise<Receta[]> {
        const { rows } = await this.connection.execute("SELECT * FROM Receta");
        return rows as Receta[];
    }

    async getById(id: number): Promise<Receta> {
        const { rows } = await this.connection.execute({
            sql: "SELECT * FROM Receta WHERE IdReceta = ?",
            args: [id.toString()]
        });
        return rows[0] as Receta;
    }

    async deleteById(id: number): Promise<void> {
        await this.connection.execute({
            sql: "DELETE FROM Receta WHERE IdReceta = ?",
            args: [id.toString()]
        });
    }

    async add(receta: Receta): Promise<Receta> {
        await this.connection.execute({
            sql: "INSERT INTO Receta (IdCita, NombreMedicamento, Cantidad, Frecuencia, UnidadMedidaTiempo) VALUES (?, ?, ?, ?, ?)",
            args: [receta.IdCita, receta.NombreMedicamento, receta.Cantidad, receta.Frecuencia, receta.UnidadMedidaTiempo]
        });
        return receta;
    }
}
