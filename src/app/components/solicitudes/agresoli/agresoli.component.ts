import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { SolicitudesComponent } from '../solicitudes.component';
import { SolicitudService } from '../../../services/solicitud.service';
import { OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Solicitud } from '../../../../interfaces/solicitud';

@Component({
  selector: 'app-agresoli',
  standalone: true,
  imports: [RouterOutlet,RouterLink,SolicitudesComponent,CommonModule,FormsModule],
  templateUrl: './agresoli.component.html',
  styleUrl: './agresoli.component.css'
})
export class AgresoliComponent {
  solicitud: Solicitud = {
    id: 0,
    clienteId: 0,
    fechaSolicitud: new Date(),
    estado: '',
    tipo: '',
    descripcion: ''
  };
  mensaje: string = '';

  constructor(private solicitudService: SolicitudService, private router: Router) {}

  addSolicitud() {
    this.solicitudService.addSolicitud(this.solicitud).subscribe({
      next: (newSolicitud) => {
        this.mensaje = 'Solicitud agregada';
        setTimeout(() => {
          this.router.navigate(['/solicitudes']);
        }, 2000); // Redirigir después de 2 segundos
      },
      error: (err) => {
        console.error('Error al crear la solicitud:', err);
        this.mensaje = 'Error al agregar la solicitud';
      }
    });
  }
}

