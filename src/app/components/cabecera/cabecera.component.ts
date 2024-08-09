import { Component } from '@angular/core';
import { RouterLink,RouterOutlet } from '@angular/router';
import { ClienteComponent } from '../cliente/cliente.component';
import { PropiedadComponent } from '../propiedad/propiedad.component';
import { SolicitudesComponent } from '../solicitudes/solicitudes.component';
import { ContratoComponent } from '../contrato/contrato.component';
@Component({
  selector: 'app-cabecera',
  standalone: true,
  imports: [RouterLink,RouterOutlet,ClienteComponent,PropiedadComponent,ContratoComponent,SolicitudesComponent],
  templateUrl: './cabecera.component.html',
  styleUrl: './cabecera.component.css'
})
export class CabeceraComponent {

}
