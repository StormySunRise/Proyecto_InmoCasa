import { Component } from '@angular/core';
import { BuscliComponent } from '../../../components/cliente/buscli/buscli.component';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { Propiedad } from '../../../../interfaces/propiedad';
import { PropiedadService } from '../../../services/propiedad.service';
import { PropiedadComponent } from '../propiedad.component';
import { ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';  // Importa FormsModule



@Component({
  selector: 'app-buscpropi',
  standalone: true,
  imports: [RouterLink,RouterOutlet,PropiedadComponent,CommonModule,FormsModule],
  templateUrl: './buscpropi.component.html',
  styleUrl: './buscpropi.component.css'
})
export class BuscpropiComponent  implements OnInit {
  propiedadId: number | undefined;
  propiedad: Propiedad | undefined;
  error: string | undefined;

  constructor(private propiedadService: PropiedadService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Puedes implementar lógica adicional si es necesario al inicializar el componente
  }

  searchPropiedad(): void {
    if (this.propiedadId !== undefined) {
      this.propiedadService.getPropiedadById(this.propiedadId).subscribe(
        (data) => {
          this.propiedad = data;
          this.error = undefined;
        },
        (err) => {
          this.error = 'No se pudo obtener la propiedad.';
          this.propiedad = undefined;
        }
      );
    }
  }
}