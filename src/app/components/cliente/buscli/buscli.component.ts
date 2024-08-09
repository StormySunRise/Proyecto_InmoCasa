import { Component } from '@angular/core';
import { ClienteService } from '../../../services/cliente.service';
import { ClienteComponent } from '../cliente.component';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { FormsModule } from '@angular/forms';
import { Cliente } from '../../../../interfaces/cliente';


@Component({
  selector: 'app-buscli',
  standalone: true,
  imports: [RouterOutlet,RouterLink,ClienteComponent,CommonModule,FormsModule],
  templateUrl: './buscli.component.html',
  styleUrl: './buscli.component.css'
})
export class BuscliComponent   {

  clienteId: number | undefined;
  cliente: Cliente | undefined;

  constructor(private clienteService: ClienteService) { }

  buscarCliente(): void {
    if (this.clienteId !== undefined) {
      this.clienteService.getClienteById(this.clienteId).subscribe(
        cliente => this.cliente = cliente,
        error => console.error('Error al obtener el cliente:', error)
      );
    }
  }
}