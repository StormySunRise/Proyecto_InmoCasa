export interface Solicitud{
    id: number;
    clienteId: number;
    fechaSolicitud: Date;
    estado: string;
    tipo: string;
    descripcion: string;
}