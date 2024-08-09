import { Component } from '@angular/core';
import { AppComponent } from '../../../app.component';
import { Proveedor } from '../../../../interfaces/proveedor';
import { ProveedorService } from '../../../services/proveedor.service';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { ProveedoresComponent } from '../proveedores.component';
import { FormsModule } from '@angular/forms';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-filprov',
  standalone: true,
  imports: [AppComponent,ProveedoresComponent,RouterLink,RouterOutlet,FormsModule,CommonModule],
  templateUrl: './filprov.component.html',
  styleUrl: './filprov.component.css'
})
export class FilprovComponent implements OnInit {
  proveedores: Proveedor[] = [];
  nombre: string = '';
  tipo: string = '';
  email: string = '';

  tiposValidos = [
    "Suministro de materiales y servicios de construcción",
    "Mobiliario y decoración",
    "Servicios de paisajismo y jardinería",
    "Servicios de limpieza y mantenimiento",
    "Servicios de tecnología y seguridad"
  ];

  constructor(private proveedorService: ProveedorService) { }

  ngOnInit(): void {
    this.obtenerProveedoresFiltrados();
  }

  obtenerProveedoresFiltrados(): void {
    this.proveedorService.getProveedoresFiltrados(this.nombre, this.tipo, this.email)
      .subscribe(
        (data: Proveedor[]) => {
          this.proveedores = data;
        },
        (error) => {
          console.error('Error al obtener proveedores filtrados:', error);
        }
      );
  }

  onFilterChange(): void {
    this.obtenerProveedoresFiltrados();
  }
}
