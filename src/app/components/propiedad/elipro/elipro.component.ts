import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { PropiedadComponent } from '../propiedad.component';
import { Propiedad } from '../../../../interfaces/propiedad';
import { PropiedadService } from '../../../services/propiedad.service';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-elipro',
  standalone: true,
  imports: [RouterLink,RouterOutlet,PropiedadComponent,CommonModule],
  templateUrl: './elipro.component.html',
  styleUrl: './elipro.component.css'
})
export class EliproComponent {
  propiedades: Propiedad[] = [];
  error: string | null = null; // Definir la propiedad error

  constructor(private propiedadService: PropiedadService) {
    this.loadPropiedades();
  }

  loadPropiedades() {
    this.propiedadService.getAllPropiedades().subscribe(
      (data) => {
        this.propiedades = data;
        this.error = null; // Resetear error si la carga es exitosa
      },
      (error) => {
        console.error('Error al cargar propiedades:', error);
        this.error = 'Error al cargar propiedades.'; // Establecer mensaje de error
      }
    );
  }

  deletePropiedad(id: number) {
    this.propiedadService.deletePropiedad(id).subscribe(
      () => {
        this.propiedades = this.propiedades.filter(p => p.id !== id);
        this.error = null; // Resetear error si la eliminación es exitosa
      },
      (error) => {
        console.error('Error al eliminar propiedad:', error);
        this.error = 'Error al eliminar propiedad.'; // Establecer mensaje de error
      }
    );
  }
}