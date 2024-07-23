import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ProcedimientoService } from './procedimiento.service';
import { Procedimiento } from 'src/Interfaces/Procedimiento';

@Controller('procedimiento')
export class ProcedimientoController {
    constructor(private readonly procedimientoService: ProcedimientoService){ }

    @Get()
    async getAll(): Promise<Procedimiento[]> {
        return await this.procedimientoService.getAll();
    }

    @Get(':id')
    async getById(@Param('id') id: string): Promise<Procedimiento> {
        return await this.procedimientoService.getById(parseInt(id));
    }

    @Post()
    async add(@Body() procedimiento: Procedimiento): Promise<Procedimiento> {
        return await this.procedimientoService.add(procedimiento);
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<void> {
        await this.procedimientoService.deleteById(parseInt(id));
    }
}
