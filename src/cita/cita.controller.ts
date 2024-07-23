import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CitaService } from './cita.service';
import { Cita } from 'src/Interfaces/Cita';

@Controller('cita')
export class CitaController {
    constructor(private readonly citaService: CitaService){ }

    @Get()
    async getAll(): Promise<Cita[]> {
        return await this.citaService.getAll();
    }

    @Get(':id')
    async getById(@Param('id') id: string): Promise<Cita> {
        return await this.citaService.getById(parseInt(id));
    }

    @Post()
    async add(@Body() cita: Cita): Promise<Cita> {
        return await this.citaService.add(cita);
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() cita: Cita): Promise<Cita> {
        cita.idCita = parseInt(id);
        return await this.citaService.update(cita);
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<void> {
        await this.citaService.deleteById(parseInt(id));
    }
}
