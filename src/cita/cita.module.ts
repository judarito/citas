import { Module } from '@nestjs/common';
import { GlobalModule } from 'src/global.module';
import { CitaController } from './cita.controller';
import { CitaService } from './cita.service';

@Module({
    imports: [GlobalModule],
    controllers: [CitaController],
    providers: [CitaService],
  })
export class CitaModule {}
