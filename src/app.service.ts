import { Inject, Injectable } from '@nestjs/common';
import { Client } from "@libsql/client";
import { Pacientes } from './Interfaces/Pacientes';



@Injectable()
export class AppService {
 
  constructor(@Inject('DBCONN') private readonly connection: Client){
    
  }
  
  async getHello(): Promise<Pacientes[]> {
   let { rows }= await this.connection.execute("SELECT * FROM pacientes");
    
    return rows as Pacientes[];
  }
}
