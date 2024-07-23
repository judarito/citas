import { Client } from '@libsql/client/.';
import { Inject, Injectable } from '@nestjs/common';
import { Paciente } from 'src/Interfaces/Paciente';

@Injectable()
export class PacienteService {
    constructor(@Inject('DBCONN') private readonly connection: Client){}

    async getAll(): Promise<Paciente[]> {
        let { rows }= await this.connection.execute("SELECT * FROM Paciente");
        return rows as Paciente[];
    }
    async getById(id:string): Promise<Paciente> {
        let { rows }= await this.connection.execute({
                                                    sql:"SELECT * FROM Paciente where IdPaciente = ?",
                                                    args: [id]
                                                    });
        return rows as Paciente;
    }

    async deleteById(id:string): Promise<void> {
         await this.connection.execute({
                                        sql:"delete FROM Paciente where IdPaciente = ?",
                                        args: [id]
                                        });
        
    }

    async add(paciente:Paciente): Promise<Paciente> {
        await this.connection.execute({
                                       sql:`INSERT INTO Paciente (NombrePaciente, Sexo, FechaNacimiento, Activo)
                                                VALUES (?, ?, ?, ?)`,
                                       args: [paciente.NombrePaciente,paciente.Sexo,paciente.FechaNacimiento,1]
                                       });
       return paciente
   }

   async update(paciente:Paciente): Promise<Paciente> {
        await this.connection.execute({
                                    sql:`UPDATE Paciente SET NombrePaciente = ?, Sexo=?, FechaNacimiento=?, Activo=? where IdPaciente = ?`,
                                    args: [paciente.NombrePaciente,paciente.Sexo,paciente.FechaNacimiento,paciente.Activo,paciente.IdPaciente]
                                    });
        return paciente
    }
}
