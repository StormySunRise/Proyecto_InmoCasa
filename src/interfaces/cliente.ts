export interface Cliente {
    id: number;
    apellido: string;
    nombre: string;
    fechaIngreso: string;
    numPropiedades: number;
    seleccionado: boolean;
    // Propiedades opcionales comentadas por ahora
  // propiedades?: Propiedad[];
  // solicitudes?: Solicitud[];
  }