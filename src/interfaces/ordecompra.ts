export interface OrdenCompra {
  id?: number;
  numeroOrden: string;
  proveedorId: number; // Cambiado a requerido
  nombreProveedor?: string; // Cambiado a opcional
  montoTotal: number;
  fechaOrden: string;
  observaciones?: string;
}