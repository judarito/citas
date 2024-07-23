import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { EvidenciaService } from './evidencia.service';
import { Evidencia } from 'src/Interfaces/Evidencia';

@Controller('evidencia')
export class EvidenciaController {
    constructor(private readonly evidenciaService: EvidenciaService){ }

    @Get()
    async getAll(): Promise<Evidencia[]> {
        return await this.evidenciaService.getAll();
    }

    @Get(':id')
    async getById(@Param('id') id: string): Promise<Evidencia> {
        return await this.evidenciaService.getById(parseInt(id));
    }

    @Post()
    async add(@Body() evidencia: Evidencia): Promise<Evidencia> {
        return await this.evidenciaService.add(evidencia);
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<void> {
        await this.evidenciaService.deleteById(parseInt(id));
    }
}
