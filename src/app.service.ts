import { Inject, Injectable } from '@nestjs/common';
import { Client } from "@libsql/client";
import { Pacientes } from './Interfaces/Pacientes';



@Injectable()
export class AppService {
 
   getHello():string {
    return "Hola mundo";
  }
}
