import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { PacienteModule } from './paciente/paciente.module';
import { DoctorModule } from './doctor/doctor.module';
import { CitaModule } from './cita/cita.module';
import { EvidenciaModule } from './evidencia/evidencia.module';
import { ProcedimientoModule } from './procedimiento/procedimiento.module';
import { RecetaModule } from './receta/receta.module';




@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: ['.env'],
    isGlobal: true,
    cache: true,
  }), PacienteModule, DoctorModule, CitaModule, EvidenciaModule, ProcedimientoModule, RecetaModule,],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {

 constructor(){
 
 }
}
