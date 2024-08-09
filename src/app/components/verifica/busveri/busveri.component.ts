import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { VerificaComponent } from '../verifica.component';
import { ObteveriComponent } from '../obteveri/obteveri.component';
import { VerifiService } from '../../../services/verifi.service';
import { Verificacion } from '../../../../interfaces/verificacion';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importa FormsModule para ngModel



@Component({
  selector: 'app-busveri',
  standalone: true,
  imports: [RouterLink,RouterOutlet,VerificaComponent,ObteveriComponent,CommonModule,FormsModule],
  templateUrl: './busveri.component.html',
  styleUrl: './busveri.component.css'
})
export class BusveriComponent {
  verificacion: Verificacion | null = null;
  id: number | null = null;
  errorMessage: string | null = null;

  constructor(private verifiService: VerifiService) {}

  buscarPorId() {
    if (this.id) {
      this.verifiService.obtenerVerificacionPorId(this.id).subscribe(
        (verificacion) => {
          this.verificacion = verificacion;
          this.errorMessage = null; // Limpiar mensaje de error si la búsqueda es exitosa
        },
        (error) => {
          this.errorMessage = 'No se encontró la verificación o ocurrió un error.';
          this.verificacion = null; // Limpiar los resultados si ocurre un error
        }
      );
    } else {
      this.errorMessage = 'Por favor, ingrese un ID válido.';
    }
  }
}
