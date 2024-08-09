import { Component } from '@angular/core';
import { ClienteComponent } from '../cliente.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ClienteService } from '../../../services/cliente.service';
import { Cliente } from '../../../../interfaces/cliente';
import { Router, ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core'; // Importa el decorador NgModule
import { BrowserModule } from '@angular/platform-browser'; // Importa BrowserModule para las aplicaciones en el navegador
import { FormsModule } from '@angular/forms'; // Importa FormsModule para usar ngModel en los formularios
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule para realizar solicitudes HTTP


@Component({
  selector: 'app-edicli',
  standalone: true,
  imports: [RouterLink,RouterOutlet,ClienteComponent,FormsModule,CommonModule],
  templateUrl: './edicli.component.html',
  styleUrl: './edicli.component.css'
})
export class EdicliComponent implements OnInit {
  clienteId: number | null = null;
  cliente: Cliente | null = null;
  errorMessage: string = '';

  constructor(
    private clienteService: ClienteService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // No cargaremos el cliente automáticamente al iniciar
  }

  buscarCliente(): void {
    if (this.clienteId === null) {
      this.errorMessage = 'Por favor, ingrese un ID válido.';
      return;
    }

    this.clienteService.getClienteById(this.clienteId).subscribe({
      next: (data) => {
        this.cliente = data;
        this.errorMessage = '';
      },
      error: (error) => {
        console.error('Error al cargar el cliente', error);
        this.errorMessage = 'No se encontró un cliente con ese ID.';
        this.cliente = null;
      }
    });
  }

  onSubmit(): void {
    if (!this.cliente) return;

    this.clienteService.updateCliente(this.cliente.id, this.cliente).subscribe({
      next: () => {
        console.log('Cliente actualizado con éxito');
        this.router.navigate(['/cliente']);
      },
      error: (error) => {
        console.error('Error al actualizar el cliente', error);
        this.errorMessage = 'Error al actualizar el cliente. Por favor, intente de nuevo.';
      }
    });
  }
}