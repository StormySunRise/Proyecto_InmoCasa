import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { OnInit } from '@angular/core';
import { Cliente } from '../../../../interfaces/cliente';
import { ClienteService } from '../../../services/cliente.service';
import { FormsModule } from '@angular/forms'; // Importar FormsModule
import { CommonModule } from '@angular/common'; // Importar CommonModule
import { ClienteComponent } from '../cliente.component';




@Component({
  selector: 'app-ingrecli',
  standalone: true,
  imports: [RouterOutlet,RouterLink,FormsModule,CommonModule,ClienteComponent],
  templateUrl: './ingrecli.component.html',
  styleUrl: './ingrecli.component.css'
})
export class IngrecliComponent  implements OnInit {
  clientes: Cliente[] = [];
  nuevoCliente: Cliente = {
    id: 0,
    apellido: '',
    nombre: '',
    fechaIngreso: '',
    numPropiedades: 0,
    seleccionado: false
  };

  constructor(private clienteService: ClienteService) {}

  ngOnInit(): void {
    this.getClientes();
  }

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

  crearCliente(): void {
    this.clienteService.createCliente(this.nuevoCliente).subscribe({
      next: (data) => {
        console.log('Cliente creado:', data);
        this.getClientes(); // Actualiza la lista de clientes
        this.nuevoCliente = { id: 0, apellido: '', nombre: '', fechaIngreso: '', numPropiedades: 0, seleccionado: false }; // Reinicia el formulario
      },
      error: (err) => {
        console.error('Error al crear cliente:', err);
      }
    });
  }
}
