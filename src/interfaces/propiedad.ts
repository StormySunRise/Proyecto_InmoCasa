export interface Propiedad {
    id: number;
    direccion: string;
    ciudad: string;
    tipo: string;
    precio: number;
    propietarioId: number;
    disponible: boolean;
    seleccionada: boolean;
  }