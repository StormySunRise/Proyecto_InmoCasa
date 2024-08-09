import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { CabeceraComponent } from '../cabecera/cabecera.component';
import { Solicitud } from '../../../interfaces/solicitud';
import { SolicitudService } from '../../services/solicitud.service';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Asegúrate de importar CommonModule
import { AgresoliComponent } from './agresoli/agresoli.component';
import { FormsModule } from '@angular/forms'; // Agrega esta línea



@Component({
  selector: 'app-solicitudes',
  standalone: true,
  imports: [RouterLink,RouterOutlet,CabeceraComponent,AgresoliComponent,FormsModule,
    CommonModule],
  templateUrl: './solicitudes.component.html',
  styleUrl: './solicitudes.component.css'
})
export class SolicitudesComponent implements OnInit {
  solicitudes: Solicitud[] = [];
  solicitudEnEdicion: Solicitud | null = null;

  constructor(private solicitudService: SolicitudService) { }

  ngOnInit(): void {
    this.loadSolicitudes();
  }

  loadSolicitudes(): void {
    this.solicitudService.getSolicitudes()
      .subscribe(
        (data: Solicitud[]) => {
          this.solicitudes = data;
        },
        error => {
          console.error('Error al cargar las solicitudes', error);
        }
      );
  }

  editarSolicitud(solicitud: Solicitud): void {
    this.solicitudEnEdicion = { ...solicitud };
  }

  cancelarEdicion(): void {
    this.solicitudEnEdicion = null;
  }

  guardarEdicion(): void {
    if (this.solicitudEnEdicion) {
      this.solicitudService.editarSolicitud(this.solicitudEnEdicion)
        .subscribe(
          () => {
            console.log('Solicitud actualizada con éxito');
            this.loadSolicitudes();
            this.solicitudEnEdicion = null;
          },
          error => {
            console.error('Error al actualizar la solicitud', error);
          }
        );
    }
  }

  eliminarSolicitud(id: number): void {
    if (confirm('¿Estás seguro de que quieres eliminar esta solicitud?')) {
      this.solicitudService.eliminarSolicitud(id)
        .subscribe(
          () => {
            console.log('Solicitud eliminada con éxito');
            this.loadSolicitudes();
          },
          error => {
            console.error('Error al eliminar la solicitud', error);
          }
        );
    }
  }
}