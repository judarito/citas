import { Module } from '@nestjs/common';
import { PacienteService } from './paciente.service';
import { PacienteController } from './paciente.controller';
import { tursoConn } from 'src/connection/Connection';
import { GlobalModule } from 'src/global.module';

@Module({
  imports: [GlobalModule],
  controllers: [PacienteController],
  providers: [PacienteService],
})
export class PacienteModule {}
