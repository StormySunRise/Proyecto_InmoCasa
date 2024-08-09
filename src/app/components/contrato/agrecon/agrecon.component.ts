import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { ContratoService } from '../../../services/contrato.service';

import { OnInit } from '@angular/core';
import { SolicitudService } from '../../../services/solicitud.service';
import { PropiedadService } from '../../../services/propiedad.service';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { Router } from '@angular/router';
import { Contrato } from '../../../../interfaces/contrato';
import { ContratoComponent } from '../contrato.component';

@Component({
  selector: 'app-agrecon',
  standalone: true,
  imports: [RouterLink,RouterOutlet,FormsModule,ContratoComponent],
  templateUrl: './agrecon.component.html',
  styleUrl: './agrecon.component.css'
})
export class AgreconComponent {
  contrato: Contrato = {
    id: 0, // Valor por defecto
    solicitudId: 0,
    fechaInicio: '',
    fechaFin: '',
    monto: 0,
    estado: '',
    terminos: '',
    propiedadId: 0
  };

  constructor(private contratoService: ContratoService, private router: Router) {}

  onSubmit(): void {
    this.contratoService.createContrato(this.contrato).subscribe({
      next: (response) => {
        console.log('Contrato creado con éxito:', response);
        this.router.navigate(['/contrato']); // Redirige a la página de contratos
      },
      error: (error) => {
        console.error('Error al crear contrato:', error);
      }
    });
  }
}
