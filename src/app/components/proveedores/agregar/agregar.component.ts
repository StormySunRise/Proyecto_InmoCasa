import { Component } from '@angular/core';
import { Proveedor } from '../../../../interfaces/proveedor';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { ProveedoresComponent } from '../proveedores.component';
import { AppComponent } from '../../../app.component';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ProveedorService } from '../../../services/proveedor.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-agregar',
  standalone: true,
  imports: [ProveedoresComponent,RouterLink,RouterOutlet,HttpClientModule,
    CommonModule,
    FormsModule],
  templateUrl: './agregar.component.html',
  styleUrl: './agregar.component.css'
})
export class AgregarComponent {

  proveedor: Proveedor = {
    id: 0,
    nombre: '',
    email: '',
    telefono: '',
    direccion: '',
    cedula: '',
    tipo: '',
    descripcion: ''
  };

  tiposValidos = [
    "Suministro de materiales y servicios de construcción",
    "Mobiliario y decoración",
    "Servicios de paisajismo y jardinería",
    "Servicios de limpieza y mantenimiento",
    "Servicios de tecnología y seguridad"
  ];
  
  error: string | null = null;

  constructor(private proveedorService: ProveedorService, private router: Router) {}

  agregarProveedor() {
    this.proveedorService.agregarProveedor(this.proveedor).subscribe({
      next: (newProveedor) => {
        console.log('Proveedor agregado:', newProveedor);
        this.router.navigate(['/proveedores']); // Ajusta esta ruta según tu configuración
      },
      error: (err) => {
        this.error = err;
        console.error('Error al agregar proveedor:', err);
      }
    });
  }
}
