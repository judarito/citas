import { Module } from '@nestjs/common';
import { GlobalModule } from 'src/global.module';
import { EvidenciaController } from './evidencia.controller';
import { EvidenciaService } from './evidencia.service';

@Module({
    imports: [GlobalModule],
    controllers: [EvidenciaController],
    providers: [EvidenciaService],
  })
export class EvidenciaModule {}
