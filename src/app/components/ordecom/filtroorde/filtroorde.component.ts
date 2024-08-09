import { Component } from '@angular/core';
import { OrdecomComponent } from '../ordecom.component';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { OrdenCompra } from '../../../../interfaces/ordecompra';
import { OnInit } from '@angular/core';
import { OrdecomService } from '../../../services/ordecom.service';
import { CommonModule } from '@angular/common';
import { FormBuilder } from '@angular/forms';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-filtroorde',
  standalone: true,
  imports: [RouterLink,RouterOutlet,OrdecomComponent,CommonModule,FormsModule],
  templateUrl: './filtroorde.component.html',
  styleUrl: './filtroorde.component.css'
})
export class FiltroordeComponent implements OnInit {
  ordenesCompra: OrdenCompra[] = [];
  numeroOrden: string = '';
  nombreProveedor: string = '';
  observaciones: string = '';

  constructor(private ordecomService: OrdecomService) { }

  ngOnInit(): void {
    this.getFiltradas();
  }

  onSubmit(): void {
    this.getFiltradas();
  }

  getFiltradas(): void {
    this.ordecomService.getOrdenesCompraFiltradas(this.numeroOrden, this.nombreProveedor, this.observaciones)
      .subscribe(
        (data: OrdenCompra[]) => {
          this.ordenesCompra = data;
        },
        (error: any) => {
          console.error('Error al obtener las órdenes de compra filtradas', error);
        }
      );
  }
}
