import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { RecetaService } from './receta.service';
import { Receta } from 'src/Interfaces/Receta';

@Controller('receta')
export class RecetaController {
    constructor(private readonly recetaService: RecetaService){ }

    @Get()
    async getAll(): Promise<Receta[]> {
        return await this.recetaService.getAll();
    }

    @Get(':id')
    async getById(@Param('id') id: string): Promise<Receta> {
        return await this.recetaService.getById(parseInt(id));
    }

    @Post()
    async add(@Body() receta: Receta): Promise<Receta> {
        return await this.recetaService.add(receta);
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<void> {
        await this.recetaService.deleteById(parseInt(id));
    }
}
