import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { Proveedor } from '../../../../interfaces/proveedor';
import { ProveedorService } from '../../../services/proveedor.service';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {  NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';





@Component({
  selector: 'app-editarprov',
  standalone: true,
  imports: [RouterLink,RouterOutlet,CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './editarprov.component.html',
  styleUrl: './editarprov.component.css'
})
export class EditarprovComponent  {
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
  proveedorEncontrado: Proveedor | null = null;
  confirmarEdicionFlag: boolean = false;
  mensaje: string | null = null;

  constructor(private proveedorService: ProveedorService) {}

  buscarProveedorPorId(form: NgForm) {
    const id = form.value.proveedorId;
    this.proveedorService.obtenerProveedorPorId(id).subscribe(
      proveedor => {
        this.proveedorEncontrado = proveedor;
        this.mensaje = null;
        this.confirmarEdicionFlag = false;
      },
      error => {
        this.mensaje = `Error al buscar proveedor: ${error}`;
        this.proveedorEncontrado = null;
      }
    );
  }

  confirmarEdicion() {
    this.proveedor = { ...this.proveedorEncontrado! };
    this.confirmarEdicionFlag = true;
  }

  editarProveedor() {
    if (this.proveedor) {
      this.proveedorService.editarProveedor(this.proveedor).subscribe(
        proveedorActualizado => {
          console.log('Proveedor actualizado:', proveedorActualizado);
          this.mensaje = 'Proveedor actualizado exitosamente.';
        },
        error => {
          console.error('Error al actualizar proveedor:', error);
          this.mensaje = `Error al actualizar proveedor: ${error}`;
        }
      );
    }
  }
}
