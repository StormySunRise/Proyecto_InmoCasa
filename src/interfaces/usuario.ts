export interface Usuario {
    id: number;
    nombre: string;
    apellido: string;
    email: string;
    cedula: string;
    passwordHash: string;
    rolId: number;
}