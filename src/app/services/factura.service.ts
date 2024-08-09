import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient,HttpErrorResponse  } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Factura } from '../../interfaces/factura';
import { catchError,map } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class  FacturaService{
  private apiUrl: string = `${environment.endpoint}api/Factura`;

  constructor(private http: HttpClient) {
    console.log('URL de la API de órdenes de Facturas:', this.apiUrl);
  }

 
  obtenerTodasLasFacturas(): Observable<Factura[]> {
    return this.http.get<Factura[]>(this.apiUrl).pipe(
      map(facturas => facturas.map(factura => ({
        ...factura,
        fechaEmision: this.formatearFecha(factura.fechaEmision),
        fechaVencimiento: this.formatearFecha(factura.fechaVencimiento)
      }))),
      catchError(this.manejarError)
    );
  }


  // Buscar facturas por ID
  obtenerFacturaPorId(id: number): Observable<Factura> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Factura>(url).pipe(
      map(factura => ({
        ...factura,
        fechaEmision: this.formatearFecha(factura.fechaEmision),
        fechaVencimiento: this.formatearFecha(factura.fechaVencimiento)
      })),
      catchError(this.manejarError)
    );
  }

  eliminarFactura(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url).pipe(
      catchError(this.manejarError)
    );
  }


  private formatearFecha(fecha: string): string {
    const date = new Date(fecha);
    return date.toISOString().split('T')[0]; // Formato 'YYYY-MM-DD'
  }


  private manejarError(error: HttpErrorResponse): Observable<never> {
    let mensajeError: string;

    if (error.error instanceof ErrorEvent) {
      mensajeError = `Error del cliente: ${error.error.message}`;
    } else {
      mensajeError = `Código del error: ${error.status}\nMensaje: ${error.message}`;
    }

    console.error(mensajeError);
    return throwError('Algo salió mal; por favor, inténtalo de nuevo más tarde.');
  }
}






