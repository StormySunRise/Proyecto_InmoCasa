import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { VerificaComponent } from '../verifica.component';
import { VerifiService } from '../../../services/verifi.service';
import { Verificacion } from '../../../../interfaces/verificacion';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importar CommonModule
import { BusveriComponent } from '../busveri/busveri.component';
import { FormsModule } from '@angular/forms'; // Importar FormsModule


@Component({
  selector: 'app-obteveri',
  standalone: true,
  imports: [RouterLink,RouterOutlet,CommonModule,VerificaComponent,BusveriComponent,FormsModule],
  templateUrl: './obteveri.component.html',
  styleUrl: './obteveri.component.css'
})
export class ObteveriComponent implements OnInit {
  verificaciones: Verificacion[] = [];
  editVerificacionId: number | null = null;

  constructor(private verifiService: VerifiService) { }

  ngOnInit(): void {
    this.verifiService.obtenerTodasLasVerificaciones().subscribe(
      data => this.verificaciones = data,
      error => console.error('Error al obtener verificaciones', error)
    );
  }

  startEditing(id: number): void {
    this.editVerificacionId = id;
  }

  cancelEditing(): void {
    this.editVerificacionId = null;
  }

  saveEdit(verificacion: Verificacion): void {
    if (this.editVerificacionId !== null && verificacion.id !== undefined) {
      this.verifiService.actualizarVerificacion(verificacion.id, verificacion).subscribe(
        () => {
          this.editVerificacionId = null;
          console.log('Verificación actualizada:', verificacion);
        },
        error => console.error('Error al actualizar verificación', error)
      );
    }
  }

  deleteVerificacion(id: number | undefined): void {
    if (id !== undefined) {
      if (confirm('¿Estás seguro de que quieres eliminar esta verificación?')) {
        this.verifiService.eliminarVerificacion(id).subscribe(
          () => {
            this.verificaciones = this.verificaciones.filter(v => v.id !== id);
            console.log('Verificación eliminada');
          },
          error => console.error('Error al eliminar verificación', error)
        );
      }
    } else {
      console.error('ID no válido para eliminación');
    }
  }
}
