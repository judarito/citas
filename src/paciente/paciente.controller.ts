import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { PacienteService } from './paciente.service';
import { Paciente } from 'src/Interfaces/Paciente';

@Controller('paciente')
export class PacienteController {
    constructor(private readonly appService: PacienteService){ }

  @Get()
  async getAll(): Promise<Paciente[]> {
    return await this.appService.getAll();
  }
  @Get(':id')
  async getById(@Param('id') id: string): Promise<Paciente> {
    return await this.appService.getById(id);
  }
  @Post()
  async add(@Body() Entity: Paciente): Promise<Paciente> {
    return await this.appService.add(Entity);
  }

  @Patch()
  async update(@Body() Entity: Paciente): Promise<Paciente> {
    return await this.appService.update(Entity);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
     await this.appService.deleteById(id);
  }
}
