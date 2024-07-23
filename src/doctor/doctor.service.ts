import { Client } from '@libsql/client/.';
import { Inject, Injectable } from '@nestjs/common';
import { Doctor } from 'src/Interfaces/Doctor';

@Injectable()
export class DoctorService {
    constructor(@Inject('DBCONN') private readonly connection: Client){}

    async getAll(): Promise<Doctor[]> {
        const { rows } = await this.connection.execute("SELECT * FROM Doctor");
        return rows as Doctor[];
    }

    async getById(id: number): Promise<Doctor> {
        const { rows } = await this.connection.execute({
            sql: "SELECT * FROM Doctor WHERE IdDoctor = ?",
            args: [id.toString()]
        });
        return rows[0] as Doctor;
    }

    async deleteById(id: number): Promise<void> {
        await this.connection.execute({
            sql: "DELETE FROM Doctor WHERE IdDoctor = ?",
            args: [id.toString()]
        });
    }

    async add(doctor: Doctor): Promise<Doctor> {
        await this.connection.execute({
            sql: "INSERT INTO Doctor (NombreDoctor, Activo) VALUES (?, ?)",
            args: [doctor.NombreDoctor, doctor.Activo ? 1 : 0]
        });
        return doctor;
    }

    async update(doctor: Doctor): Promise<Doctor> {
        await this.connection.execute({
            sql: "UPDATE Doctor SET NombreDoctor = ?, Activo = ? WHERE IdDoctor = ?",
            args: [doctor.NombreDoctor, doctor.Activo ? 1 : 0, doctor.IdDoctor]
        });
        return doctor;
    }
}
