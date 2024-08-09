export interface Proveedor {
    id: number;
    nombre: string;
    email: string;
    telefono: string;
    direccion: string;
    cedula: string;
    tipo: string;
    descripcion?: string; // `descripcion` es opcional porque en C# es nullable (`string?`)

}