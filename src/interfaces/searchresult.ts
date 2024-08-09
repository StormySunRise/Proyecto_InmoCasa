// src/interfaces/SearchResult.ts

export interface Factura {
    id: number;
    identificadorFactura: number;
    fechaEmision: string; // En formato ISO 8601
    fechaVencimiento: string; // En formato ISO 8601
    proveedorNombre: string;
}

export interface OrdenCompra {
    id?: number;
    numeroOrden: string;
    proveedorId: number;
    nombreProveedor?: string;
    montoTotal: number;
    fechaOrden: string;
    observaciones?: string;
}

export interface Proveedor {
    id: number;
    nombre: string;
    email: string;
    telefono: string;
    direccion: string;
    cedula: string;
    tipo: string;
    descripcion?: string;
}

// Interfaz para los resultados de búsqueda
export interface SearchResult {
    facturas: any[]; // Reemplaza 'any' con la interfaz correcta para Factura
    ordenesCompra: any[]; // Reemplaza 'any' con la interfaz correcta para OrdenCompra
    proveedores: any[]; // Reemplaza 'any' con la interfaz correcta para Proveedor
    usuarios: any[]; // Reemplaza 'any' con la interfaz correcta para Usuario
  }