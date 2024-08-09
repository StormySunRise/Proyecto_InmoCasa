import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError,tap } from 'rxjs';
import { OrdenCompra } from '../../interfaces/ordecompra';
import { HttpErrorResponse, } from '@angular/common/http';
import { throwError } from 'rxjs';
import { Proveedor } from '../../interfaces/proveedor';
import { ProveedorService } from './proveedor.service';
import { map } from 'rxjs';
import { HttpParams } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class OrdecomService {
  private apiUrl: string = `${environment.endpoint}api/Ordecompra`;
  private proveedorApiUrl: string = `${environment.endpoint}api/Proveedor`; // Nueva URL para proveedores

  

  constructor(private http: HttpClient) {
    console.log('URL de la API de órdenes de compra:', this.apiUrl);
    console.log('URL de la API de proveedores:', this.proveedorApiUrl);

  }

   // Método para obtener todas las órdenes de compra
   getOrdenesCompra(): Observable<OrdenCompra[]> {
    return this.http.get<OrdenCompra[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }


  

  getAllProveedores(): Observable<Proveedor[]> {
    return this.http.get<Proveedor[]>(this.proveedorApiUrl).pipe(
      tap(proveedores => console.log('Proveedores obtenidos:', proveedores)),
      catchError(this.handleError)
    );
  }

  addOrdenCompra(ordenCompra: OrdenCompra): Observable<OrdenCompra> {
    console.log('Servicio: Enviando orden de compra al servidor:', JSON.stringify(ordenCompra));
    return this.http.post<OrdenCompra>(this.apiUrl, ordenCompra).pipe(
      tap(response => console.log('Respuesta del servidor:', response)),
      catchError((error: HttpErrorResponse) => {
        console.error('Error detallado:', error);
        if (error.error instanceof ErrorEvent) {
          console.error('Error del cliente:', error.error.message);
        } else {
          console.error(`Código de error del servidor: ${error.status}, ` +
                        `cuerpo del error: ${JSON.stringify(error.error)}`);
        }
        return throwError(() => new Error(this.getErrorMessage(error)));
      })
    );
  }
  
  private getErrorMessage(error: HttpErrorResponse): string {
    if (error.error instanceof ErrorEvent) {
      return `Error del cliente: ${error.error.message}`;
    }
    return `Error del servidor: ${error.status} - ${JSON.stringify(error.error)}`;
  }

  
  




  // Método para obtener órdenes de compra filtradas
  getOrdenesCompraFiltradas(numeroOrden?: string, nombreProveedor?: string, observaciones?: string): Observable<OrdenCompra[]> {
    let params = new HttpParams();
    if (numeroOrden) params = params.append('numeroOrden', numeroOrden);
    if (nombreProveedor) params = params.append('nombreProveedor', nombreProveedor);
    if (observaciones) params = params.append('observaciones', observaciones);

    return this.http.get<OrdenCompra[]>(`${this.apiUrl}/filtradas`, { params }).pipe(
      catchError(this.handleError)
    );
  }


  // Manejo de errores HTTP
  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Client-side error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Server-side error: ${error.status} - ${error.message}`;
    }
    console.error(errorMessage); // Log the error to the console
    return throwError(errorMessage); // Return an observable with a user-facing error message
  }
}

