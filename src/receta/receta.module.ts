import { Module } from '@nestjs/common';
import { GlobalModule } from 'src/global.module';
import { RecetaController } from './receta.controller';
import { RecetaService } from './receta.service';

@Module({
    imports: [GlobalModule],
    controllers: [RecetaController],
    providers: [RecetaService],
  })
export class RecetaModule {}
