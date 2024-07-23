export interface Paciente {
    IdPaciente?: number;
    NombrePaciente?: string;
    Sexo?: string;
    FechaNacimiento?: string; // Se asume que la fecha está en formato YYYY-MM-DD
    Activo?: boolean;
}