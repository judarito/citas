import { Module } from '@nestjs/common';
import { GlobalModule } from 'src/global.module';
import { ProcedimientoController } from './procedimiento.controller';
import { ProcedimientoService } from './procedimiento.service';

@Module({
    imports: [GlobalModule],
    controllers: [ProcedimientoController],
    providers: [ProcedimientoService],
  })
export class ProcedimientoModule {}
