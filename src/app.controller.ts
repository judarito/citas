import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Pacientes } from './Interfaces/Pacientes';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(): Promise<Pacientes[]> {
    return await this.appService.getHello();
  }
}
