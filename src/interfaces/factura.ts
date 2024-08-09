
export interface Factura {
    id: number;
    identificadorFactura: number;
    fechaEmision: string; // En formato ISO 8601
    fechaVencimiento: string; // En formato ISO 8601
    proveedorNombre: string;

}