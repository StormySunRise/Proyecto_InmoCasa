import { Component } from '@angular/core';
import { AppComponent } from '../../../app.component';
import { ProveedoresComponent } from '../proveedores.component';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { Proveedor } from '../../../../interfaces/proveedor';
import { ProveedorService } from '../../../services/proveedor.service';
import { OnInit } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-elimiprov',
  standalone: true,
  imports: [RouterLink,RouterOutlet,CommonModule,FormsModule],
  templateUrl: './elimiprov.component.html',
  styleUrl: './elimiprov.component.css'
})
export class ElimiprovComponent implements OnInit {
  proveedorId: number | undefined;
  mensaje: string = '';

  constructor(private proveedorService: ProveedorService) {}

  ngOnInit(): void {
    // Inicialización si es necesario
  }

  eliminarProveedor() {
    if (this.proveedorId !== undefined) {
      this.proveedorService.eliminarProveedor(this.proveedorId).subscribe({
        next: () => {
          this.mensaje = `Proveedor con ID ${this.proveedorId} eliminado con éxito.`;
          console.log(this.mensaje);
          // Aquí podrías agregar lógica adicional, como redirigir al usuario o actualizar la vista
        },
        error: (error) => {
          console.error('Error al eliminar el proveedor:', error);
          this.mensaje = 'Error al eliminar el proveedor.';
        }
      });
    } else {
      console.error('ID del proveedor no especificado.');
      this.mensaje = 'ID del proveedor no especificado.';
    }
  }
}
