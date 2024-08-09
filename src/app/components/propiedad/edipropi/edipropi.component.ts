import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { PropiedadComponent } from '../propiedad.component';
import { PropiedadService } from '../../../services/propiedad.service';
import { Propiedad } from '../../../../interfaces/propiedad';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { OnInit } from '@angular/core';


@Component({
  selector: 'app-edipropi',
  standalone: true,
  imports: [RouterLink,RouterOutlet,PropiedadComponent,FormsModule,CommonModule],
  templateUrl: './edipropi.component.html',
  styleUrl: './edipropi.component.css'
})
export class EdipropiComponent implements OnInit {
  searchId: number | undefined;
  propiedad: Propiedad | undefined;

  constructor(
    private propiedadService: PropiedadService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {}

  searchPropiedad(): void {
    if (this.searchId) {
      this.propiedadService.getPropiedadById(this.searchId).subscribe(
        propiedad => {
          this.propiedad = propiedad;
        },
        error => {
          console.error('Error al obtener la propiedad:', error);
          this.propiedad = undefined; // Asegúrate de limpiar el estado en caso de error
        }
      );
    }
  }

  askToUpdate(): void {
    if (confirm('¿Desea actualizar esta propiedad?')) {
      this.updatePropiedad();
    }
  }

  updatePropiedad(): void {
    if (this.propiedad) {
      this.propiedadService.updatePropiedad(this.propiedad.id, this.propiedad).subscribe(
        () => {
          console.log('Propiedad actualizada con éxito');
          this.router.navigate(['/propiedad']); // Navegar a la lista o cualquier otra página
        },
        error => console.error('Error al actualizar la propiedad:', error)
      );
    }
  }
}