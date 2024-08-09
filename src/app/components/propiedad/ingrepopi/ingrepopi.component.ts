import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { PropiedadService } from '../../../services/propiedad.service';
import { PropiedadComponent } from '../propiedad.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CabeceraComponent } from '../../../components/cabecera/cabecera.component';
import { Propiedad } from '../../../../interfaces/propiedad';



@Component({
  selector: 'app-ingrepopi',
  standalone: true,
  imports: [RouterLink,RouterOutlet,PropiedadComponent,FormsModule,CommonModule,CabeceraComponent],
  templateUrl: './ingrepopi.component.html',
  styleUrl: './ingrepopi.component.css'
})
export class IngrepopiComponent {
  propiedad: Propiedad = {
    id: 0,
    direccion: '',
    ciudad: '',
    tipo: '',
    precio: 0,
    propietarioId: 0,
    disponible: true,
    seleccionada: false
  };

  mensaje: { texto: string; tipo: 'success' | 'error' } | null = null;

  constructor(private propiedadService: PropiedadService) {}

  agregarPropiedad() {
    this.propiedadService.createPropiedad(this.propiedad).subscribe({
      next: (data) => {
        this.mensaje = {
          texto: 'Propiedad agregada exitosamente.',
          tipo: 'success'
        };
        // Puedes redirigir o realizar otras acciones aquí
      },
      error: (error) => {
        this.mensaje = {
          texto: 'Error al agregar propiedad. Inténtelo de nuevo más tarde.',
          tipo: 'error'
        };
        console.error('Error al agregar propiedad:', error);
      }
    });
  }
}



