import { Component } from '@angular/core';
import { OrdecomComponent } from '../ordecom.component';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';
import { OrdecomService } from '../../../services/ordecom.service';
import { OrdenCompra } from '../../../../interfaces/ordecompra';
import { FormGroup,FormBuilder } from '@angular/forms';
import { Proveedor } from '../../../../interfaces/proveedor';
import { ProveedorService } from '../../../services/proveedor.service';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';





@Component({
  selector: 'app-agregarorde',
  standalone: true,
  imports: [RouterLink, RouterOutlet, HttpClientModule, CommonModule, ReactiveFormsModule,FormsModule],
  templateUrl: './agregarorde.component.html',
  styleUrl: './agregarorde.component.css'
})
export class AgregarordeComponent implements OnInit {
  ordenesCompra: OrdenCompra[] = [];
  proveedores: Proveedor[] = [];
  nuevaOrdenCompra: OrdenCompra = {
    numeroOrden: '',
    proveedorId: 0,
    montoTotal: 0,
    fechaOrden: new Date().toISOString().split('T')[0],
    observaciones: ''
  };

  constructor(private ordecomService: OrdecomService) { }

  ngOnInit(): void {
    this.cargarOrdenesCompra();
    this.cargarProveedores();
  }

  cargarOrdenesCompra(): void {
    this.ordecomService.getOrdenesCompra().subscribe(
      ordenes => {
        console.log('Órdenes de compra cargadas:', ordenes);
        this.ordenesCompra = ordenes;
      },
      error => console.error('Error al cargar órdenes de compra', error)
    );
  }

  cargarProveedores(): void {
    this.ordecomService.getAllProveedores().subscribe(
      proveedores => {
        console.log('Proveedores cargados:', proveedores);
        this.proveedores = proveedores;
      },
      error => console.error('Error al cargar proveedores', error)
    );
  }

  agregarOrdenCompra(): void {
    console.log('Enviando orden de compra:', this.nuevaOrdenCompra);
    this.ordecomService.addOrdenCompra(this.nuevaOrdenCompra).subscribe(
      ordenAgregada => {
        console.log('Orden de compra agregada', ordenAgregada);
        this.ordenesCompra.push(ordenAgregada);
        this.resetearFormulario();
      },
      error => {
        console.error('Error al agregar orden de compra', error);
        // Aquí puedes agregar lógica para mostrar el error al usuario
      }
    );
  }

  resetearFormulario(): void {
    this.nuevaOrdenCompra = {
      numeroOrden: '',
      proveedorId: 0,
      montoTotal: 0,
      fechaOrden: new Date().toISOString().split('T')[0],
      observaciones: ''
    };
  }
}
