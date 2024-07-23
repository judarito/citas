import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { DoctorService } from './doctor.service';
import { Doctor } from 'src/Interfaces/Doctor';

@Controller('doctor')
export class DoctorController {
    constructor(private readonly doctorService: DoctorService){ }

    @Get()
    async getAll(): Promise<Doctor[]> {
        return await this.doctorService.getAll();
    }

    @Get(':id')
    async getById(@Param('id') id: string): Promise<Doctor> {
        return await this.doctorService.getById(parseInt(id));
    }

    @Post()
    async add(@Body() doctor: Doctor): Promise<Doctor> {
        return await this.doctorService.add(doctor);
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() doctor: Doctor): Promise<Doctor> {
        doctor.IdDoctor = parseInt(id);
        return await this.doctorService.update(doctor);
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<void> {
        await this.doctorService.deleteById(parseInt(id));
    }
}
