export interface Cita {
    idCita?: number;
    IdPaciente?: number;
    IdDoctor?: number;
    FechaCita?: string; // Se asume que la fecha está en formato YYYY-MM-DD
    Descripcion?: string;
    Estado?: string;
}