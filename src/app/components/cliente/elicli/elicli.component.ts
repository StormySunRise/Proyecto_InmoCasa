import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { ClienteService } from '../../../services/cliente.service';
import { CommonModule } from '@angular/common';
import { Cliente } from '../../../../interfaces/cliente';



@Component({
  selector: 'app-elicli',
  standalone: true,
  imports: [RouterLink,RouterOutlet,CommonModule],
  templateUrl: './elicli.component.html',
  styleUrl: './elicli.component.css'
})
export class ElicliComponent {
  clientes: Cliente[] = [];

  constructor(private clienteService: ClienteService) {
    this.loadClientes();
  }

  loadClientes(): void {
    this.clienteService.getClientes().subscribe(
      (data) => this.clientes = data,
      (error) => console.error('Error al cargar clientes', error)
    );
  }

  deleteCliente(id: number): void {
    if (confirm('¿Está seguro de que desea eliminar este cliente?')) {
      this.clienteService.deleteCliente(id).subscribe(
        () => {
          this.clientes = this.clientes.filter(cliente => cliente.id !== id);
          console.log('Cliente eliminado con éxito');
        },
        (error) => console.error('Error al eliminar cliente', error)
      );
    }
  }
}
