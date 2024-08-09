export interface Contrato {
    id: number;
    solicitudId: number;
    fechaInicio: Date | string;
    fechaFin: Date | string;
    monto: number;
    estado: string;
    terminos: string;
    propiedadId: number;
}