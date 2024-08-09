import { Component } from '@angular/core';
import { Factura } from '../../../../interfaces/factura';
import { FacturaComponent } from '../factura.component';
import { FacturaService } from '../../../services/factura.service';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; // Importar ReactiveFormsModule
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-busfac',
  standalone: true,
  imports: [RouterLink,RouterOutlet,FacturaComponent,ReactiveFormsModule,CommonModule],
  templateUrl: './busfac.component.html',
  styleUrl: './busfac.component.css'
})
export class BusfacComponent {
  facturaForm: FormGroup;
  factura: Factura | null = null;
  error: string | null = null;

  constructor(private facturaService: FacturaService, private fb: FormBuilder) {
    this.facturaForm = this.fb.group({
      id: ['']
    });
  }

  buscarFactura() {
    const id = this.facturaForm.get('id')?.value;
    if (id) {
      this.facturaService.obtenerFacturaPorId(id).subscribe(
        (data) => {
          this.factura = data;
          this.error = null;
        },
        (error) => {
          this.error = error;
          this.factura = null;
        }
      );
    }
  }
}