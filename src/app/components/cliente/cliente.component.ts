import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { ClienteService } from '../../services/cliente.service';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngrecliComponent } from './ingrecli/ingrecli.component';
import { EdicliComponent } from './edicli/edicli.component';
import { BuscliComponent } from './buscli/buscli.component';
import { ElicliComponent } from './elicli/elicli.component';
import { Cliente } from '../../../interfaces/cliente';
import { CabeceraComponent } from '../cabecera/cabecera.component';

@Component({
  selector: 'app-cliente',
  standalone: true,
  imports: [RouterOutlet,RouterLink,
    
    CommonModule,IngrecliComponent,ElicliComponent,EdicliComponent,BuscliComponent,CabeceraComponent],
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.css'
})
export class ClienteComponent implements OnInit {
  clientes: Cliente[] = []; // Array para almacenar los clientes

  constructor(private clienteService: ClienteService) {}

  ngOnInit(): void {
    this.getClientes();
  }

  // Método para obtener la lista de clientes
  getClientes(): void {
    this.clienteService.getClientes().subscribe({
      next: (data) => {
        this.clientes = data;
      },
      error: (err) => {
        console.error('Error al obtener clientes:', err);
      }
    });
  }
}
