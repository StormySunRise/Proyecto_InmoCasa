import { Component,OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { Factura } from '../../../interfaces/factura';
import { FacturaService } from '../../services/factura.service';
import { CommonModule } from '@angular/common';
import { BusfacComponent } from './busfac/busfac.component';
import { ElifacComponent } from './elifac/elifac.component';


@Component({
  selector: 'app-factura',
  standalone: true,
  imports: [RouterLink,RouterOutlet,AppComponent,CommonModule,BusfacComponent,ElifacComponent],
  templateUrl: './factura.component.html',
  styleUrl: './factura.component.css'
})
export class FacturaComponent implements OnInit {
  facturas: Factura[] = [];
  error: string | null = null;

  constructor(private facturaService: FacturaService) {}

  ngOnInit(): void {
    this.obtenerFacturas();
  }

  obtenerFacturas(): void {
    this.facturaService.obtenerTodasLasFacturas().subscribe(
      (data: Factura[]) => {
        this.facturas = data.map(factura => ({
          ...factura,
          fechaEmision: this.formatearFecha(factura.fechaEmision),
          fechaVencimiento: this.formatearFecha(factura.fechaVencimiento)
        }));
      },
      (error: string) => {
        this.error = error;
      }
    );
  }

  eliminarFactura(id: number): void {
    if (confirm('¿Estás seguro de que quieres eliminar esta factura?')) {
      this.facturaService.eliminarFactura(id).subscribe(
        () => {
          // Actualiza la lista de facturas después de la eliminación
          this.obtenerFacturas();
        },
        (error: string) => {
          this.error = error;
        }
      );
    }
  }

  private formatearFecha(fecha: string): string {
    const date = new Date(fecha);
    return date.toISOString().split('T')[0]; // Formato 'YYYY-MM-DD'
  }
}
