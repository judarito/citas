import { Module } from '@nestjs/common';
import { GlobalModule } from 'src/global.module';
import { DoctorController } from './doctor.controller';
import { DoctorService } from './doctor.service';

@Module({
    imports: [GlobalModule],
    controllers: [DoctorController],
    providers: [DoctorService],
  })
export class DoctorModule {}
