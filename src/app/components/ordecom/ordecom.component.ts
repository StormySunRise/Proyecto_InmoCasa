import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { AppComponent } from '../../app.component';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AgregarComponent } from '../proveedores/agregar/agregar.component';
import { PrincipalComponent } from '../principal/principal.component';
import { OnInit } from '@angular/core';
import { OrdecomService } from '../../services/ordecom.service';
import { OrdenCompra } from '../../../interfaces/ordecompra';
import { AgregarordeComponent } from './agregarorde/agregarorde.component';
import { OrdeneliComponent } from './ordeneli/ordeneli.component';

@Component({
  selector: 'app-ordecom',
  standalone: true,
  imports: [ RouterLink, RouterOutlet, HttpClientModule,CommonModule,AgregarordeComponent,OrdeneliComponent],
  templateUrl: './ordecom.component.html',
  styleUrl: './ordecom.component.css'
})
export class OrdecomComponent implements OnInit {
  ordenesCompra: OrdenCompra[] = [];
  errorMessage: string = '';

  constructor(private ordenCompraService: OrdecomService) { }

  ngOnInit(): void {
    this.loadOrdenesCompra();
  }

  private loadOrdenesCompra(): void {
    this.ordenCompraService.getOrdenesCompra().subscribe(
      (data: OrdenCompra[]) => {
        this.ordenesCompra = data;
      },
      (error: string) => {
        this.errorMessage = error;
      }
    );
  }
}


